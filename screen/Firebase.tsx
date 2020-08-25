import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native";

//Firebase setup
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7oULkXcKNPyiQck9yd_U-Z5ckc_LSaEM",
  authDomain: "test-firstexpofirebase.firebaseapp.com",
  projectId: "test-firstexpofirebase",//Cloud firestore project ID
};

var db = firebase.firestore();

//Create new name or take from Auth

function readFirestore(){
  db.collection("users").get().then((querySnapshot)=>{
    
  })
}

function storeText(userId: string, stack: string, text: string){
  //Get Stack Name or #

  //Get card
  let card: string = "card01";

  db.collection(`users/${userId}/${stack}/${card}`).add({
    card: text
  })
  .then(function(docRef){
    console.log("Document wrriten with ID: ", docRef.id);
  })
  .catch(function(error){
    console.error("Error adding document: ", error);
  })
}

export default function Firebase() {
  const navigate = useNavigation();

  firebase.initializeApp(firebaseConfig);

  db.collection(`users`).add({
    first: "Ben",
    last: "K",
    height: "5\'7"
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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