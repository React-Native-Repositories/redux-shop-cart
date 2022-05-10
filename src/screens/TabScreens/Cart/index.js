import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {getCartListList} from '../../../redux/actionCreators/cart';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../common/colors';

const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          itemId: item?.id,
          // otherParam: 'anything you want here',
        })
      }>
      <View style={{backgroundColor: 'gray'}}>
        <Text style={styles.price}>Product ID : {item?.productId}</Text>
      </View>
    </TouchableOpacity>
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
  console.log(props.cart, '---------->');

  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* {props?.cart?.cartLoading ? (
        <TextInput style={{textAlign: 'center', marginTop: 2}}>
          Please wait...
        </TextInput>
      ) : ( */}
      <View style={styles.app}>
        <FlatList
          data={props.cart?.cartList?.products}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          keyExtractor={item => item.alt}
        />
      </View>
      {/* )} */}
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
