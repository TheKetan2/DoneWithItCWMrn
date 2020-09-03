import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../../config/colors";
import AppText from ".././AppText";
const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
    elevation: 0.5,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    overflow: "hidden",
  },
  title: {
    marginBottom: 7,
    fontSize: 16,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
