import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Enter Email" />
    </Screen>
  );
}
