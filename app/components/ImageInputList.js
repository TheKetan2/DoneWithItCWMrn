import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ImageInput from "./ImageInput";

const ImageInputList = ({ imageURIs = [], onRemoveImage, onAddImage }) => {
  return (
    <View style={styles.conatainer}>
      {imageURIs.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput imageURI={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}

      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
