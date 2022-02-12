import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { tableCreation, insertTable, retrieveTable } from "../db";
import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [lastname, setLastname] = useState("");
  const [vorname, setVorname] = useState("");
  const promises = (name, time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} Is Resolved`);
        resolve();
      }, time);
    });
  };

  const pressHandler = async () => {
    // Promise.all([promises("1st", 2000), promises("2nd", 2000)]);
    // console.log('Not Interesting!');

    //////////////////////////////////

    // try {
    //   console.log("start");
    //   await promises("1st", 2000);
    //   await promises("2nd", 2000);
    //   console.log("stop");
    // } catch (e) {
    //   console.log(e);
    // }

    /////////////////////////////////////

    // console.log("Start");
    // promises("1st", 2000)
    //   .then(() =>
    //     promises("2nd", 2000)
    //       .then(() => console.log("Done"))
    //       .catch((e) => console.log(e))
    //   )
    //   .catch((e) => console.log(e));

    //////////////////////////////////////

    if (!lastname || !vorname) {
      alert("Please fill in the form!");
    } else {
      try {
        console.log("Start");
        await tableCreation("MyTable");
        await insertTable("MyTable", vorname, lastname);
        await retrieveTable("MyTable");
        console.log("Done");
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
