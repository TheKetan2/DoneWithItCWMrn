import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children, style }) {
  return <Text style={([styles.text], style)}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // color: "red",s
    fontFamily: "Roboto",
  },
});
