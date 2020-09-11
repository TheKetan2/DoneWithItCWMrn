import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title={"Link"}
      onPress={() => navigation.navigate("TweetDetails", { id: "Ketan" })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />

    <Stack.Screen
      name="TweetDetails"
      component={TweetsDetails}
      options={({ route }) => ({
        title: route.params.id,
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
