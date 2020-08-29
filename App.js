import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Dimensions,
  Button,
} from "react-native";

import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log(Dimensions); //
  const onPressed = () => {
    console.log("Ketan");
    return Alert.alert("Ketan Ramteke", "This is alert box", [
      { text: "Yes" },
      { text: "No" },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "20%" }}
      >
        <Button title={"Clicked"} onPress={onPressed} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
