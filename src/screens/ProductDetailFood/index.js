import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Products} from '../../common/products';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../common/colors';
import {getSpecificProduct} from '../../services/Apis/products.service';

<ion-icon name="add-circle-outline"></ion-icon>;
const ListItem = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.mainView}>
        <Image
          source={{
            uri: props.item.uri,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.subMain}>
        <View style={styles.subText}>
          <Text style={styles.itemText}>{props?.item?.text}</Text>
          <View style={styles.iconView}>
            <Icon name="add-circle" color={colors.green} size={25} />
            <Text style={styles.iconText}>1</Text>
            <Icon name="remove-circle" color={colors.red} size={25} />
          </View>
        </View>
        <View style={styles.subText}>
          <View style={styles.itemText2}>
            <Text style={styles.text1}>
              {parseFloat(props.item.note ? props.item.note : 0).toFixed(1)}
            </Text>
            <Icon
              name="star-sharp"
              size={12}
              color={colors.white}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemPrice}>₹ {props?.item?.price}</Text>
        </View>
      </View>
    </View>
  );
};
export default function ProductDetail(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [productInfo, setProductInfo] = useState({});
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
      let resp = await getSpecificProduct(props.route?.params?.itemId);
      if (resp) {
        setProductInfo(resp);
      }
    } catch (error) {}
  };

  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */

  console.log(productInfo, '---------<');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="arrow-back-outline" color={colors.black} size={20} />
        </View>
        <View style={styles.headerRight}>
          <View>
            <Icon
              name="search-outline"
              color={colors.black}
              size={20}
              style={styles.icon1}
            />
          </View>
          <View style={styles.circle}>
            <Icon
              style={styles.icon2}
              name="ellipsis-horizontal-outline"
              color={colors.black}
              size={25}
            />
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <ScrollView style={styles.scroll}>
          <View style={styles.headerText}>
            <View style={styles.header1}>
              <Text style={styles.headertext}>{productInfo?.title}</Text>
              <Text style={styles.headertext1}>{productInfo?.category}</Text>
              <Text style={styles.headerdesc}>
                2-89/1, Near Tirupati Chittor, West Road, Padmavathi Puram
                Panchayati, Srinivasapuram, Tiruchanur, Tirupati
              </Text>
              <View style={styles.headeeTimer}>
                <View style={styles.timer1}>
                  <Icon name="alarm-outline" color={colors.black} size={20} />
                  <Text style={styles.timer2}>28 mins</Text>
                </View>
              </View>
            </View>
            <View style={styles.header2}>
              <View style={styles.header2View}>
                <Text style={styles.header2Text}>
                  {productInfo?.rating?.rate}
                </Text>
                <Icon
                  name="star-sharp"
                  size={12}
                  color={colors.white}
                  style={styles.icon}
                />
              </View>
              <View style={styles.header2View1}>
                <Text style={styles.header2View1Text}>
                  {productInfo?.rating?.count}
                </Text>
                <Text style={styles.header2View1Text}>Count</Text>
              </View>
            </View>
          </View>
          <FlatList
            data={Products}
            renderItem={({item}) => <ListItem {...props} item={item} />}
            showsHorizontalScrollIndicator={false}
            {...props}
          />
        </ScrollView>
      </View>
    </View>
  );
}
