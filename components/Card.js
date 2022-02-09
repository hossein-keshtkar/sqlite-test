import { StyleSheet, View } from "react-native";
import React from "react";

const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    minHeight: 150,
    elevation: 10,
    minWidth: 250,
    maxWidth: 450,
    width: "90%",
    padding: 15,
  },
});
