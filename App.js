import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  console.log("app executed");
  const onPressed = () => console.log("text pressed fn");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={onPressed}>
        Open up App.js to start
      </Text>
      <TouchableNativeFeedback onPress={onPressed}>
        {/* <Image
          blurRadius={1}
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/200/300",
            height: 300,
            width: 200,
          }}
        /> */}
        <View
          style={{ width: 200, height: 50, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
      {/* </View> */}
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
