import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Form from "./components/Form";
import { database } from "./db";

export default function App() {
  database()
    .then(() => console.log("Form successfully created."))
    .catch((err) => console.log("Table creation failed!" + err.message));

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
