import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeliveryScreen from '../screens/TabScreens/DeliveryScreen';
import HistoryScreen from '../screens/TabScreens/HistoryScreen';
import MoneyScreen from '../screens/TabScreens/MoneyScreen';
import OfferScreen from '../screens/TabScreens/OfferScreen';
import CartScreen from '../screens/TabScreens/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hp, wp} from '../dimensions';
import {colors} from '../common/colors';
import {connect} from 'react-redux';
import {getCartListList} from '../redux/actionCreators/cart';

const Tab = createBottomTabNavigator();

function UIBottomTabNavigator(props) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    props.getCartListList('1');
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false}}
      screenOptions={{
        tabBarStyle: {height: 60 + insets.bottom},
      }}>
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerTitle: () => {
            <View>
              <Text style={{color: 'black'}}>Home</Text>
            </View>;
          },
          headerShown: false,
          headerTitleAlign: 'left',
          tabBarActiveTintColor: '#cb202d',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="home" size={20} color={'#cb202d'} />
                <Text style={styles.labelFocusedStyle}>Delivery</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="home" size={20} color={'black'} />
                <Text style={styles.labelStyle}>Delivery</Text>
              </View>
            );
          },
          headerLeft: () => (
            <View style={styles.location}>
              <Icon name="location-outline" size={25} color={'#cb202d'} />
            </View>
          ),
          headerRight: () => <View style={styles.profile}></View>,
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OfferScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="md-book" size={20} color={'#cb202d'} />
                <Text style={styles.labelFocusedStyle}>Offers</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="md-book" size={20} color={'black'} />
                <Text style={styles.labelStyle}>Offers</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="ios-cart" size={20} color={'#cb202d'} />
                <Text style={styles.labelFocusedStyle}>Cart</Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors.red,
                    position: 'absolute',
                    top: 0,
                    right: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: colors.white}}>
                    {props?.cart?.cartList?.products?.length}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="ios-cart" size={20} color={'black'} />
                <Text style={styles.labelStyle}>Cart</Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors.black,
                    position: 'absolute',
                    top: 0,
                    right: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: colors.white,fontSize:10}}>
                    {props?.cart?.cartList?.products?.length}
                  </Text>
                </View>
              </View>
            );
          },
          tabBarActiveTintColor: '#cb202d',
        }}
      />
      <Tab.Screen
        name="Money"
        component={MoneyScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="wallet-sharp" size={20} color={'#cb202d'} />
                <Text style={styles.labelFocusedStyle}>Money</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="wallet-sharp" size={20} color={'black'} />
                <Text style={styles.labelStyle}>Money</Text>
              </View>
            );
          },
          tabBarActiveTintColor: '#cb202d',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitleStyle: {textAlign: 'left'},
          headerShown: true,
          headerTitleAlign: 'left',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelFocusedContainer}>
                <Icon name="ios-newspaper" size={20} color={'#cb202d'} />
                <Text style={styles.labelFocusedStyle}>History</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="ios-newspaper" size={20} color={'black'} />
                <Text style={styles.labelStyle}>History</Text>
              </View>
            );
          },
          tabBarActiveTintColor: '#cb202d',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    width: '100%',
  },
  labelFocusedContainer: {
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#cb202d',
  },
  labelFocusedStyle: {
    textAlign: 'center',
    marginVertical: 9,
    color: '#cb202d',
    backgroundColor: 'transparent',
    fontSize: 10,
  },
  labelStyle: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'black',
    backgroundColor: 'transparent',
    fontSize: 10,
  },
  profile: {
    height: 30,
    width: 30,
    backgroundColor: '#cb202d',
    borderRadius: 15,
    right: 12,
  },
  location: {
    left: 8,
  },
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UIBottomTabNavigator);
