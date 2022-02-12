import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Form from "./components/Form";
import { drop } from "./db";
import React from "react";

export default function App() {
  const bootingUp = async () => {
    try {
      await drop("MyTable");
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
