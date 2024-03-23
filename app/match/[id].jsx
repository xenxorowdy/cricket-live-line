import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import MatchDetail from "../component/MatchDetail";

const Match = () => {

  const { id } = useLocalSearchParams();
  return (
    <ScrollView style={styles.scrollView}>
      <MatchDetail matchId={id} />
    </ScrollView>
  );
};

export default Match;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,

    // marginHorizontal: 20,
  },
  textScroll: {
    color: "#fff",
  },
});
