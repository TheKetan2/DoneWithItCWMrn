import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need permission");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
