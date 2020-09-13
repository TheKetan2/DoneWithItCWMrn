import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedStackNavigator from "./FeedNavigator";
import AccountStackNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator mode="card">
    <Tab.Screen name="Feed" component={FeedStackNavigator}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingEditScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountStackNavigator}></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
