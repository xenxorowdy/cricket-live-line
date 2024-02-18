import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TopTab from "./TopTab";
import Live from "./Live";
import Info from "./Info";
import Commentary from "./Commentary";
import History from "./History";
import ScoreBoard from "./ScoreBoard";
import PointsTable from "./PointsTable";

const matchDetail = [
  "Live",
  "Info",
  "Commentary",
  "ScoreBoard",
  "History",
  "Points Table",
];

const MatchDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeTab = (data, index) => {
    setCurrentIndex(index);
  };
  return (
    <View style={{}}>
      <TopTab
        option={matchDetail}
        currentIndex={currentIndex}
        handleChangeTab={handleChangeTab}
      />
      {currentIndex === 0 && <Live />}
      {currentIndex === 1 && <Info />}
      {currentIndex === 2 && <Commentary />}
      {currentIndex === 3 && <ScoreBoard />}
      {currentIndex === 4 && <History />}
      {currentIndex === 5 && <PointsTable />}
    </View>
  );
};

export default MatchDetail;

const styles = StyleSheet.create({});
