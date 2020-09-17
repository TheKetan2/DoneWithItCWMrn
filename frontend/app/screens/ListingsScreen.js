import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import Button from "../components/Button";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const result = await listingsApi.getListings();
    if (!result.ok) return setError(true);

    setError(false);
    setListings(result.data);
  };

  return (
    <Screen style={styles.screen}>
      {error ||
        (listings.length == 0 && (
          <>
            <AppText>Couldn't retrive the listings.</AppText>
            <Button title={"Retry"} onPress={loadListings} />
          </>
        ))}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          console.log(item.images[0].url);
          return (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageURL={item.images[0].url}
              onPress={() => navigation.navigate("ListingDetails", item)}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
