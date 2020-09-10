import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, View, Button } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageURIs, setImageURIs] = useState([]);

  const handleAdd = (uri) => {
    setImageURIs([...imageURIs, uri]);
  };

  const handleRemove = (uri) => {
    setImageURIs(imageURIs.filter((imageURI) => imageURI !== uri));
  };
  return (
    <Screen>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleRemove(uri)}
      />
    </Screen>
  );
}
