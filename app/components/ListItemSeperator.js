import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItemSeperator = () => {
  return <View style={styles.seperator}></View>;
};

export default ListItemSeperator;

const styles = StyleSheet.create({
  seperator: { width: "100%", height: 1, backgroundColor: "lightgrey" },
});
