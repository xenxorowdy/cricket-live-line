import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import TopTab from "./TopTab";
import BlockBox from "./BlockBox";
import { HomeMatch, LiveMatches } from "../api";
import SeriesInfo from "./seriesInfo.jsx";
import HomeNew from "./HomeNew.jsx";
import _ from "lodash";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export default function Home({refresh,setRefresh}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [homeMatch, setHomeMatch] = useState([]);
  const [liveMatch, setLiveMatch] = useState([]);
  
  const handleChangeTab = (data, index) => {
    setCurrentIndex(index);
  };
  const fetchMatch = async () => {
    try {
      const data = await LiveMatches();
      setLiveMatch(data?.data);

      setRefresh(false);
    } catch (error) {
      console.error("err", error)
    }
  
  };

  const fetchHomeMatchList = async () => {
    try {
      
      const data = await HomeMatch();
      setHomeMatch(data?.data);
      setRefresh(false)
    } catch (error) {
      console.error(error)
      handleRefreshFalse()
    }
  };

  if (refresh) {
     fetchMatch();
      fetchHomeMatchList();    
  }
  
  const debounce = async () => {
    await fetchMatch();
    await fetchHomeMatchList();
  };
  // Simulate an event triggering the render
  useEffect(() => {
    console.log("refresh");
    const timerId = setInterval(debounce, 10000);
    return () => clearInterval(timerId);
  }, []);
  useState(() => {

      fetchMatch();
      fetchHomeMatchList();    
    
  }, [refresh]);
    // const adUnitId = __DEV__
    // ? TestIds.ADAPTIVE_BANNER
    // : "ca-app-pub-1715488426615455/4262888413";
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <TopTab currentIndex={currentIndex} handleChangeTab={handleChangeTab} />
      {currentIndex == 0 ? (
        <Carousel liveMatch={homeMatch} />
      ) : (
        <BlockBox liveMatch={liveMatch} />
      )}
      {currentIndex == 0 && (
        <View>
          <SeriesInfo />
              {/* <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      /> */}
          <HomeNew />
        </View>
      )}
    </View>
  );
}
