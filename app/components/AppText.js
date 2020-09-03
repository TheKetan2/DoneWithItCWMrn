import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import defaultStyle from "../config/styles";

export default function AppText({ children, style }) {
  return <Text style={([defaultStyle.text], style)}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
  },
});
