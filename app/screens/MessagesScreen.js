import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ListItem from "../components/ListItems/ListItem";

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
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
