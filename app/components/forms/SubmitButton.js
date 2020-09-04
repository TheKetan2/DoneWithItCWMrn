import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../Buttons/AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View>
      <AppButton title={title} onPress={handleSubmit} />
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});
