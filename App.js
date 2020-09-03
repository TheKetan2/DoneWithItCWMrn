import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState("");
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput placeholder="Email" />
    </Screen>
  );
}
