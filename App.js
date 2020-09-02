import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "./app/components/Card/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
export default function App() {
  return (
    <Screen>
      <Icon
        name="email"
        backgroundColor="tomato"
        iconColor="white"
        size={140}
      />
    </Screen>
  );
}
