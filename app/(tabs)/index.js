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
import { LinearGradient } from "expo-linear-gradient";
const HomePage = () => {
  const [refresh,setRefresh] = useState(true)
  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : "ca-app-pub-2940991674659781/1317316404";
  const pullme = () => {
    setRefresh(true)
  }
    
  return (
    <LinearGradient colors={['#722F37', '#333d33', '#333333']}  style={styles.linearGradient}>
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
        </LinearGradient>
  );
};

export default HomePage;

const styles = StyleSheet.create({
   linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,

  },
  scrollView: {
    // backgroundColor: "#fff",
    // height: Dimensions.get("window").height,

    // marginHorizontal: 20,
  },
});
