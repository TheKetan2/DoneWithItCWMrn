import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetsDetails = () => (
  <Screen>
    <Text>Tweets Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />

    <Stack.Screen name="TweetDetails" component={TweetsDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
