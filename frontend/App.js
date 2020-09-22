import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const [user, setUser] = useState();
  return (
    <>
      <OfflineNotice />
      {/* <Text>HihI</Text> */}
      <NavigationContainer theme={navigationTheme}>
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
