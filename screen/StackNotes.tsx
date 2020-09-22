import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default function StackNotes() {
  const navigate = useNavigation();
  const [key, setKey] = useState<Object | null>(""); //State to display key object
  const [value, setValue] = useState<object | null>({});

  const setKeys = async (key: string) => {
    // 1 key at a time.
    try {
      const jsonValue = JSON.stringify(key);
      //Check if keys key-pair exists to determine to merge to existing pair or create new one
      const keyobject = await AsyncStorage.getItem("keys");

      AsyncStorage.setItem("keys", jsonValue); //Assign new keys into object
    } catch (e) {
      console.log(`setKeys Error: ${e}`);
    }
  };

  const getKeys = async () => {
    //returns objects
    try {
      const jsonValue = await AsyncStorage.getItem("keys");

      if (jsonValue === null) {
        return null;
      } else {
        return JSON.parse(jsonValue); //JSON requires a string otherwise it throws an error
        //If not resolved when given option to be string or null
      }
    } catch (e) {
      console.log(`getKeys Error: ${e}`);
    }
  };

  const setData = async (key: string, value: Object) => {
    try {
      //stringify inside function to avoid having to stringify anywhere else
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(`setData() Error: ${e}`);
    }
  };

  const getData = async (key: string) => {
    //Returns object
    try {
      const jsonValue = await AsyncStorage.getItem(key);

      if (jsonValue === null) {
        return null;
      } else {
        return JSON.parse(jsonValue); //JSON requires a string otherwise it throws an error
        //If not resolved when given option to be string or null
      }
    } catch (e) {
      console.log(`getData() Error: ${e}`);
    }
  };

  //Proof of concept

  setData("stack01", { card01: "stampede", card02: "locks" });
  setKeys("stack01");

  // useEffect(() => {
  //   const keysobject = getKeys();
  //   keysobject.then((keys: Object) => {
  //     setKey(keys);
  //     console.log("keys ", keys);
  //   });

  //   const valueobject = getData("stack01");
  //   valueobject.then((values) => {
  //     setValue(values);
  //     console.log("stack ", values);
  //   });
  // }, [key, value]);

  return (
    <View style={styles.container}>
      <Text>keys: </Text>
      <Text>card: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//Proof of Concept: Success
//Works as intended. Additional code and logic are needed; such will be implemented in final product
