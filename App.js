import { database, insertion, retrieve } from "./db";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Form from "./components/Form";
import React from "react";

export default function App() {
  const bootingUp = async () => {
    try {
      await database();
      await insertion("Naghi", "Mamuli");
      await retrieve();
    } catch (e) {
      console.log(e);
    }
  };
  bootingUp();

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
