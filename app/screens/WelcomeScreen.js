import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import AppButton from "../components/Buttons/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.redLogo}
        />
        <Text style={styles.tabline}>Sell What You Dont Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("Button clicked")}
        />
        <AppButton
          title="Register"
          onPress={() => console.log("Button clicked")}
          color="secondary"
        />
      </View>
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

  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tabline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
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
