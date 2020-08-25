import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

/*

  Add as JS Server file in root folder~~

*/

//Firebase setup
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7oULkXcKNPyiQck9yd_U-Z5ckc_LSaEM",
  authDomain: "test-firstexpofirebase.firebaseapp.com",
  databaseURL: "https://test-firstexpofirebase.firebaseio.com",
  projectId: "test-firstexpofirebase",
  storageBucket: "test-firstexpofirebase.appspot.com",
  messagingSenderId: "1028607848712",
  appId: "1:1028607848712:web:896daaf75e2e3e8cbebcbd",
  measurementId: "G-HE8M76YB2X",
};

//Create nanoID for UserID

//Will be enabled in root JS firestore file
/*
function readFirestore() {
  db.collection("users")
    .get()
    .then((querySnapshot) => {});
}

function storeText(userId: string, stack: string, text: string) {
  //Get Stack Name or #

  //Get card
  let card: string = "card01";

  db.collection(`users/${userId}/${stack}/${card}`)
    .add({
      card: text,
    })
    .then(function (docRef) {
      console.log("Document wrriten with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}
*/
export default function Firebase() {
  const navigate = useNavigation();

  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  // db.collection(`users`)
  //   .add({
  //     first: "Ben",
  //     last: "K",
  //     height: "5'7",
  //   })
  //   .then(function (docRef) {
  //     console.log("Document wrriten with ID: ", docRef.id);
  //   })
  //   .catch(function (error) {
  //     console.error("Error adding document: ", error);
  // });

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
