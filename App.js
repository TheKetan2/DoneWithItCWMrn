import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "./app/components/Card/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItems/ListItem";
export default function App() {
  return (
    <Screen>
      <ListItem
        title="My Title"
        subTitle="My Subtitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
