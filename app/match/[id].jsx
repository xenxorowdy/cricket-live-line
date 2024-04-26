import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import MatchDetail from "../component/MatchDetail";
import { LinearGradient } from "expo-linear-gradient";
import StickyFooter from "../component/StickyFooter";

const Match = () => {

  const { id } = useLocalSearchParams();
  const idx = id.split("sep1s@-")[0];
  return (
    <LinearGradient colors={['#722F37', '#333333', '#333333']} style={styles.linearGradient}>
      {/* <StickyFooter /> */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <MatchDetail matchId={idx} />
      </ScrollView>
    </LinearGradient>
  );
};

export default Match;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  scrollView: {

    height: Dimensions.get("window").height,

    // marginHorizontal: 20,
  },
  textScroll: {
    color: "#fff",
  },
});
