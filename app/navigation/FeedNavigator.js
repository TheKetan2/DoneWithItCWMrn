import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailScreen from "../screens/ListingDetailScreen";

const Stack = createStackNavigator();

const FeedStackNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default FeedStackNavigator;
