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

const HomePage = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>got to user </Text>
      <Home />
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
