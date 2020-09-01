import React from "react";
import { FlatList } from "react-native";

import Constants from "expo-constants";

import ListItem from "../components/ListItems/ListItem";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "t3",
    description: "d3",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;
