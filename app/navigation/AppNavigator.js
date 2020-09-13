import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listing" component={ListingScreen}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingDetailScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
