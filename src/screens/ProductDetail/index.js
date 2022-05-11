import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Products} from '../../common/products';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../common/colors';
import {
  addProductCart,
  getSpecificProduct,
} from '../../services/Apis/products.service';
import {hp} from '../../dimensions';
import {getCartListList} from '../../redux/actionCreators/cart';
import {connect} from 'react-redux';

<ion-icon name="add-circle-outline"></ion-icon>;

function ProductDetail(props) {
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
    props.getCartListList('1');
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

  const handleAddCart = async products => {
    try {
      let payload = {
        userId: 1,
        products: [products],
        date: '2022-05-11',
      };
      console.log(payload, '--------->');
      let resp = await addProductCart(payload);
      if (resp) {
        props.getCartListList('1');
      }
    } catch (error) {}
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
          // <Text style={{textAlign: 'center', marginTop: 2}}>
          //   Please wait...
          // </Text>
          <ActivityIndicator size="large" color={colors.red} />
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
        {props.cart?.cartList?.products.length > 0 &&
        props.cart?.cartList?.products
          .map(item => item.productId)
          .includes(props.route?.params?.itemId) ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{
              backgroundColor: colors.green,
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
              name="checkmark-done"
              size={20}
              color={colors.white}
              style={{marginRight: '5%'}}
            />
            <Text style={{color: colors.white, alignSelf: 'center'}}>
              Go to cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
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
            }}
            onPress={() =>
              handleAddCart({
                productId: props.route?.params?.itemId,
                quantity: 1,
              })
            }>
            <Icon
              name="cart-outline"
              size={20}
              color={colors.white}
              style={{marginRight: '5%'}}
            />
            <Text style={{color: colors.white, alignSelf: 'center'}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getCartListList: id => dispatch(getCartListList(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
