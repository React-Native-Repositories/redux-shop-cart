// https://www.reactnativeschool.com/vertical-and-horizontal-scrolling-in-a-sectionlist-flatlist
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../dimensions';
import {colors} from '../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

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
          resizeMode="center"
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
                color={colors.white}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function VerticalSlider(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.route?.params?.item}</Text>
      <View style={styles.app}>
        <FlatList
          data={props.data}
          numColumns={2}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          keyExtractor={item => item.alt}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  app: {
    flex: 2,
    backgroundColor: '#F7F9F9',
    width: width,
  },
  item: {
    flex: 1,
    // margin: '2%',
    maxWidth: '100%',
    borderWidth: 0.5,
    borderColor: '#fff',
  },
  items: {
    width: width / 2,
    height: 280,
    backgroundColor: 'white',
    marginRight: 3,
    marginBottom: 3,
  },
  itemPhoto: {
    width: '100%',
    height: '100%',
  },

  imageInfo: {
    position: 'absolute',
    backgroundColor: colors.white,
    color: colors.black,
    bottom: 0,
    // minHeight:50,
    width: '100%',
  },
  imageText: {
    backgroundColor: colors.white,
    fontSize: 14,
    // textAlign: 'center',
    marginLeft: '5%',
    marginTop: hp(5),
    // marginBottom: hp(5),
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8%',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:colors.green,
    padding:3,
    borderRadius:3,
  },
  icon: {
    marginLeft: '2%',
    // marginRight: '2%',
  },
  text1:{
    color: colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
    margin: '2%',
    color: colors.black,
  },
});
