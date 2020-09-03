import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
