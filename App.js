import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "./app/components/Card/Card";

export default function App() {
  return (
    <View
      style={{ backgroundColor: "lightgrey", padding: 20, paddingTop: 100 }}
    >
      <Card
        title="Red Jacker for sale"
        subTitle="100"
        image={require("./app/assets/jacket.jpg")}
      />
      {/* <Text>Hello </Text> */}
    </View>
  );
}
