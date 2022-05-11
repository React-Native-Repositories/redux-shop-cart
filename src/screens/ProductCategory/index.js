import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getSpecificCategoryProduct} from '../../services/Apis/products.service';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../common/colors';
import {useNavigation} from '@react-navigation/native';

const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          itemId: item?.id,
          // otherParam: 'anything you want here',
        })
      }>
      <View style={styles.items}>
        <Image
          source={{
            uri: item?.image,
          }}
          style={styles.itemPhoto}
          resizeMode="contain"
          alt="test"
        />
        <View style={styles.imageInfo}>
          <Text style={styles.imageText}>
            {item?.title.split(' ')[0]} {item?.title.split(' ')[1]}{' '}
            {item?.title.split(' ')[2]}
          </Text>
          <View style={styles.more}>
            <Text style={styles.price}>₹ {item?.price}</Text>
            <View style={styles.rating}>
              <Text style={styles.text1}>
                {parseFloat(
                  item?.rating?.rate ? item?.rating?.rate : 0,
                ).toFixed(1)}
              </Text>
              <Icon
                name="star-sharp"
                size={12}
                color={colors.green}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ProductCategory(props) {
  const navigation = useNavigation();

  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    getData();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */

  const getData = async () => {
    try {
      setIsLoading(true);
      let resp = await getSpecificCategoryProduct(props.route?.params?.item);
      if (resp) {
        setIsLoading(false);
        setList(resp);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };


  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */
  return (
    <View style={styles.container}>
      {isLoading ? (
        // <Text style={{textAlign: 'center', marginTop: 2}}>Please wait...</Text>
        <ActivityIndicator size="large" color={colors.red} />
      ) : (
        <View style={{flex: 1}}>
          <Text style={styles.title}>{props.route?.params?.item}</Text>
          <View style={styles.app}>
            <FlatList
              data={list}
              numColumns={2}
              renderItem={({item}) => (
                <Item item={item} navigation={navigation} />
              )}
              keyExtractor={item => item.alt}
            />
          </View>
        </View>
      )}
    </View>
  );
}
