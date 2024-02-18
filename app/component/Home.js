import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Carousel from "./Carousel";
import TopTab from "./TopTab";
import BlockBox from "./BlockBox";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeTab = (data, index) => {
    setCurrentIndex(index);
  };
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <TopTab currentIndex={currentIndex} handleChangeTab={handleChangeTab} />
      {currentIndex == 0 ? <Carousel /> : <BlockBox />}
    </View>
  );
}
