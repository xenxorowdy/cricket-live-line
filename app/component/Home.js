import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Carousel from "./Carousel";
import TopTab from "./TopTab";
import BlockBox from "./BlockBox";
import { HomeMatch, LiveMatches } from "../api";
import SeriesInfo from "./seriesInfo.jsx";
import HomeNew from "./HomeNew.jsx";

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

    } catch (error) {
      console.error("err", error)
    }
    setRefresh(false);
  
  };

  const fetchHomeMatchList = async () => {
    try {
      
      const data = await HomeMatch();
      setHomeMatch(data?.data);

    } catch (error) {
      console.error(error)
      handleRefreshFalse()
    }
    setRefresh(false)
  };

  useState(() => {

      fetchMatch();
      fetchHomeMatchList();    
    
  }, [refresh]);
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
          <HomeNew />
        </View>
      )}
    </View>
  );
}
