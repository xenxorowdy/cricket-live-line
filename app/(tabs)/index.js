import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import Home from "../component/Home.js";
import TopTab from "../component/TopTab.jsx";
import BackgroundFetchScreen from "../component/prevantScreen.jsx";

const HomePage = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  console.log("hello", apiUrl);
  return (
    <ScrollView style={styles.scrollView}>
      <Home />
      <BackgroundFetchScreen />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#141414",
    height: Dimensions.get("window").height,

    // marginHorizontal: 20,
  },
});
