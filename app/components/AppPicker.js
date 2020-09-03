import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyle from "../config/styles";
import AppText from "./AppText";

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={30}
        color={colors.medium}
        // style={styles.icon }
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    // justifyContent: "space-between",
  },
  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.dark,
  },
});
