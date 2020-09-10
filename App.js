import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, View, Button } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [imageURIs, setImageURIs] = useState([]);

  return <ListingEditScreen />;
}
