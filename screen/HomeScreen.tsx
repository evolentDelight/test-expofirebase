import "react-native-gesture-handler";
import React from "react";
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {navigation.navigate("Firebase")}}
      >
        <Text>Firebase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {navigation.navigate("TextDetector")}}
      >
        <Text>TextDetector</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {navigation.navigate("StackNotes")}}
      >
        <Text>StackNotes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {navigation.navigate("TextEditor")}}
      >
        <Text>TextEditor</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});