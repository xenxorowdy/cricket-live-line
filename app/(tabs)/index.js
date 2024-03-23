import {
  Dimensions,
  Pressable,
  RefreshControl,
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
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import "expo-dev-client";
const HomePage = () => {
  const [refresh,setRefresh] = useState(true)
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  console.log("hello", apiUrl);
  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : "ca-app-pub-1715488426615455/2952778381";
  const pullme = () => {
    setRefresh(true)
  }
    
  return (
    <ScrollView
      refreshControl={<RefreshControl
        refreshing={refresh}
        onRefresh={pullme}
      />
      }
      style={styles.scrollView}>
      <Home refresh={refresh} setRefresh={setRefresh} />
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    // height: Dimensions.get("window").height,

    // marginHorizontal: 20,
  },
});
