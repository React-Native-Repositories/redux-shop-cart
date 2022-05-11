import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {getCartListList} from '../../../redux/actionCreators/cart';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../common/colors';
import {
  deleteCart,
  updateProductCart,
} from '../../../services/Apis/products.service';

const Item = ({item, navigation, handleUpdateCart}) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        minHeight: 100,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            itemId: item?.productId,
            // otherParam: 'anything you want here',
          })
        }>
        <Text style={styles.price}>Product ID : {item?.productId}</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            handleUpdateCart([
              {
                productId: item?.productId,
                quantity: item?.quantity > 0 ? item?.quantity - 1 : 0,
              },
            ])
          }>
          <View style={{marginRight: 20}}>
            <Icon name="remove-circle" size={30} color={colors.red} />
          </View>
        </TouchableOpacity>
        <Text>{item?.quantity}</Text>
        <TouchableOpacity
          onPress={() =>
            handleUpdateCart([
              {
                productId: item?.productId,
                quantity: item?.quantity > 0 ? item?.quantity + 1 : 0,
              },
            ])
          }>
          <View style={{marginLeft: 20}}>
            <Icon name="add-circle" size={30} color={colors.green} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() =>
          handleUpdateCart([
            {
              productId: item?.productId,
              quantity: 0,
            },
          ])
        }
        style={{position: 'absolute', top: 6, right: 10}}>
        <View>
          <Icon name="trash" size={25} color={colors.red} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

function CartScreen(props) {
  const navigation = useNavigation();

  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    props.getCartListList('1');
  }, []);
  const handleUpdateCart = async products => {
    let payload = {
      userId: 1,
      products: products,
      date: '2022-05-11',
    };
    try {
      let resp = await updateProductCart(props?.cart?.cartList?.id, payload);
      if (resp) {
        props.getCartListList('1');
      }
    } catch (error) {}
  };

  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */
  return (
    <SafeAreaView style={styles.mainContainer}>
      {props?.cart?.cartLoading ? (
        // <TextInput style={{textAlign: 'center', marginTop: 2}}>
        //   Please wait...
        // </TextInput>
                  <ActivityIndicator size="large"  color={colors.red} />

      ) : (
        <View style={styles.app}>
          <FlatList
            data={props.cart?.cartList?.products}
            renderItem={({item}) => (
              <Item
                item={item}
                navigation={navigation}
                handleUpdateCart={handleUpdateCart}
              />
            )}
            keyExtractor={item => item.alt}
          />
        </View>
      )}
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
