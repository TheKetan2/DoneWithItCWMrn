import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const [imageURI, setImageURI] = useState({});

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access Image");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageURI(result.uri);
      }
      console.log(result.uri.toString());
    } catch (e) {
      console.log("Error Reading image.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image style={{ width: 100, height: 100 }} source={{ uri: imageURI }} />
    </Screen>
  );
}
