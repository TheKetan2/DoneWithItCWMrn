import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Buttons/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize="none"
        authoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        authoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        textContentType="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton
        title="Login"
        onPress={() =>
          console.log("Email: " + email + "\nPassword: " + password)
        }
      />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    padding: 20,
  },
});
