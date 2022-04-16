import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeliveryScreen from '../screens/TabScreens/DeliveryScreen';
import HistoryScreen from '../screens/TabScreens/HistoryScreen';
import MoneyScreen from '../screens/TabScreens/MoneyScreen';
import OfferScreen from '../screens/TabScreens/OfferScreen';
const Tab = createBottomTabNavigator();

function UIBottomTabNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Money" component={MoneyScreen} />
      <Tab.Screen name="Offers" component={OfferScreen} />
    </Tab.Navigator>
  );
}

export default UIBottomTabNavigator;
