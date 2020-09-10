import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, TouchableOpacity, View, Button } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function App() {
  // WE are using hooks to store image url
  const [imageURI, setImageURI] = useState(null);

  /* showing alert message for getting required permissions 
  for accessing image gallery */

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access Image");
    }
  };

  /* function for selecting the image and setting imageURI 
  for us to use
  */

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

  /* when our component runs for the first time the n useEffet runs the
  requestPermission() function to get needed permissions
  
  */
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <Button onPress={selectImage} title="Select Image" />
      <ImageInput
        imageURI={imageURI}
        onChangeImage={(uri) => setImageURI(uri)}
      />
    </Screen>
  );
}
