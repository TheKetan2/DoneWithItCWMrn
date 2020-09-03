import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(null);
  return (
    <Screen>
      <AppPicker
        items={categories}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
        selectedItem={category}
      />
      <AppTextInput placeholder="Email" />
    </Screen>
  );
}
