import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.redLogo}
        />
        <Text>Sell What You Dont Need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  redLogo: {
    width: 100,
    height: 100,

    // alignSelf: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
});
