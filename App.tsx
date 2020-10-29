import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import HomeScreen from "./screen/HomeScreen";
import Firebase from "./screen/Firebase";
import TextDetector from "./screen/TextDetector";
import StackNotes from "./screen/StackNotes";
import TextEditor from "./screen/TextEditor";

export default function App() {
  const Stack = createStackNavigator();
  /*TestTest*/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Firebase"
          component={Firebase}
          options={{ title: "Firebase" }}
        />
        <Stack.Screen
          name="TextDetector"
          component={TextDetector}
          options={{ title: "TextDetector" }}
        />
        <Stack.Screen
          name="StackNotes"
          component={StackNotes}
          options={{ title: "StackNotes" }}
        />
        <Stack.Screen
          name="TextEditor"
          component={TextEditor}
          options={{ title: "TextEditor" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
