import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Buttons/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        onSubmit={(values) => console.log(values)}
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          authoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          authoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
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
