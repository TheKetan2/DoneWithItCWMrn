import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 50,
    top: 50,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 50,
    top: 50,
    backgroundColor: colors.secondary,
  },
});
