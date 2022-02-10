import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { insertion, retrieve } from "../db";
import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [lastname, setLastname] = useState("");
  const [vorname, setVorname] = useState("");
  const pressHandler = async () => {
    if (!lastname || !vorname) {
      alert("Please fill in the form!");
    } else {
      try {
        await insertion(vorname, lastname);
        await retrieve();
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <Card>
      <View style={styles.container}>
        <Text>First Name</Text>
        <TextInput
          onChangeText={(txt) => setVorname(txt)}
          keyboardType="default"
          style={styles.input}
          value={vorname}
        />
      </View>
      <View style={styles.container}>
        <Text>Last Name</Text>
        <TextInput
          onChangeText={(txt) => setLastname(txt)}
          keyboardType="default"
          style={styles.input}
          value={lastname}
        />
      </View>
      <View style={styles.container}>
        <Button onPress={pressHandler} title="SUBMIT" />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: "100%",
  },

  input: {
    borderBottomWidth: 1,
    width: "100%",
    padding: 5,
  },
});

export default Form;
