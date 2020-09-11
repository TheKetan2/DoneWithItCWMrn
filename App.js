import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

const Link = ({ name }) => {
  const navigation = useNavigation();
  return (
    <Button
      title={"Link"}
      onPress={() => navigation.navigate(name, { id: "Ketan" })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link name={"TweetDetails"} />
  </Screen>
);

const TweetsDetails = ({ route }) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
    <Link name={"Tweets"} />
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "tomato",
      },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />

    <Stack.Screen
      name="TweetDetails"
      component={TweetsDetails}
      options={{
        headerStyle: {
          backgroundColor: "tomato",
        },
        headerTintColor: "white",
      }}
    />
  </Stack.Navigator>
);

const Feed = () => (
  <Screen>
    <Text style={{ textAlign: "center" }}>Feed</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text style={{ textAlign: "center" }}>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
      size: 25,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"home"} size={size} color={color} />
        ),
      }}
      name="Feed"
      component={Feed}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name={"account"} size={size} color={color} />
        ),
      }}
      name="Account"
      component={Account}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
