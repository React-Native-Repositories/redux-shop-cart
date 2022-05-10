import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Products} from '../../common/products';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../common/colors';
import {getSpecificProduct} from '../../services/Apis/products.service';
import {hp} from '../../dimensions';

<ion-icon name="add-circle-outline"></ion-icon>;

export default function ProductDetail(props) {
  const navigation = useNavigation();
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
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
      // let resp = await getSpecificProduct(2);
       let resp = await getSpecificProduct(props.route?.params?.itemId);
      if (resp) {
        setIsLoading(false);
        setProductInfo(resp);
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
      {/* <View style={styles.header}>
        <TouchableOpacity
          // style={styles.headerLeft}
          onPress={() => navigation.navigate('Main')}>
          <View style={styles.headerLeft}>
            <Icon name="arrow-back-outline" color={colors.black} size={20} />
          </View>
        </TouchableOpacity>
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
      </View> */}
      <View style={styles.mainContainer}>
        {isLoading ? (
          <Text style={{textAlign: 'center', marginTop: 2}}>
            Please wait...
          </Text>
        ) : (
          <ScrollView style={styles.scroll}>
            <View style={styles.item}>
              <Image
                source={{
                  uri: productInfo?.image,
                }}
                style={styles.itemPhoto}
                resizeMode="contain"
                alt="test"
              />

              <View style={styles.rating}>
                <View style={styles.rating1}>
                  <Text>{productInfo?.rating?.rate}</Text>
                  <Icon
                    name="star-sharp"
                    size={12}
                    color={colors.green}
                    style={styles.icon}
                  />
                </View>
                <View style={styles.verticleLine}></View>
                <Text>{productInfo?.rating?.count}</Text>
              </View>
            </View>

            <View style={styles.detail}>
              <Text style={styles.title}>{productInfo?.title}</Text>
              <Text style={styles.subtitle}>{productInfo?.category}</Text>
              <View style={styles.desc}>
                <Text style={styles.price}>₹ {productInfo?.price}</Text>
                <Text style={styles.priceLine}>₹ {productInfo?.price}</Text>
                <Text style={styles.offer}>(78% OFF)</Text>
              </View>
              <Text style={styles.more}>Inclusive all taxes</Text>
            </View>
            <View style={styles.descriptionView}>
              <Text style={styles.title}>Product Descirption</Text>
              <Text style={styles.description}>{productInfo?.description}</Text>
            </View>
          </ScrollView>
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: hp(70),
          borderWidth: 1,
          borderColor: colors.textGray,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            color: colors.black,
            padding: 10,
            borderWidth: 1,
            borderColor: colors.textGray,
            marginLeft: '5%',
            borderRadius: 5,
            width: '40%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Icon
            name="heart-outline"
            size={20}
            color={colors.black}
            style={{marginRight: '5%'}}
          />
          <Text style={{color: colors.black}}>Wishlist</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.red,
            color: colors.white,
            alignSelf: 'center',
            padding: 10,
            marginRight: '5%',
            borderRadius: 5,
            width: '40%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Icon
            name="cart-outline"
            size={20}
            color={colors.white}
            style={{marginRight: '5%'}}
          />
          <Text style={{color: colors.white, alignSelf: 'center'}}>
            Add to cart
          </Text>
        </View>
      </View>
    </View>
  );
}
