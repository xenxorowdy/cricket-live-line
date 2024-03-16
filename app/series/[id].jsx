import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopTab from "../component/TopTab";
import { useState, useEffect } from "react";
import {
  getVenueResult,
  getseriesFixtures,
  seriesNewsDetail,
  seriesStatsBySeriesId,
  squadsBySeriesId,
} from "../api";
import { useLocalSearchParams } from "expo-router";
import SeriesFixtures from "../component/SeriesFixtures";
import PointsTable from "../component/PointsTable";
import NewsComponent from "../news/[id]";
import HomeNew from "../component/HomeNew";
import Venue from "../component/Venue";
const SeriesInfo = () => {
  const option = [
    "Overview",
    "Fixtures",
    "Points Table",
    "Team Squad",
    "stats",
    "Venues",
    "News",
    "Videos",
  ];
  const { id } = useLocalSearchParams();

  const [index, setIndex] = useState();
  const [news, setNews] = useState();
  const [fixtures, setFixtures] = useState();
  const [stats, setStats] = useState();
  const [point, setPoint] = useState();
  const [squad, setSquad] = useState();
  const [venues, setVenues] = useState();
  const [newsData, setNewsData] = useState();
  const [fixturesData, setFixturesData] = useState();
  const handleChangeTab = (data, index) => {
    setIndex(index);
  };
  const getseriesFixture = async () => {
    const data = await getseriesFixtures(id);
    console.log(data);
    setFixtures(data);
  };
  const getponitres = () => {
    const data = getseriesFixture(id);
    setPoint(data);
  };
  const getNewsDetails = async () => {
    const data = await seriesNewsDetail(id);
    setNews(data);
  };
  const getStats = async () => {
    const res = await seriesStatsBySeriesId(id);
    setStats(res);
  };
  const getVenues = () => {
    const data = getVenueResult(id);
    setVenues(data);
  };
  const getSquadSeriesId = async () => {
    const data = await squadsBySeriesId(id);
    setSquad(data);
  };
  const teamSquad = () => {};
  useEffect(() => {
    getseriesFixture();
    getponitres();
    getNewsDetails();
    getStats();
    getSquadSeriesId();
    getVenues();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ justifyContent: "center" }}>
        <TopTab
          option={option}
          currentIndex={index}
          handleChangeTab={handleChangeTab}
        />

        {index == 0 && <Text>Overview</Text>}
        {index == 1 && <SeriesFixtures data={fixtures} />}
        {index == 2 && <PointsTable data={news} />}
        {index == 3 && <Text>Team Squad</Text>}
        {index == 4 && <Text>stats</Text>}
        {index == 5 && <Venue item={venues?._j} />}
        {index == 6 && <HomeNew id={news} />}
        {index == 7 && <Venue data={news} />}
      </View>
    </ScrollView>
  );
};

export default SeriesInfo;
const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
  },
  subTopHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  titles: {
    paddingHorizontal: 5,
    backgroundColor: "#3c3c3c",
    color: "#FFFFFF",
    minHeight: 45,
    justifyContent: "center",
    borderRadius: 6,
    borderWidth: 1,
    alignContent: "center",
    marginHorizontal: 8,
    justifyContent: "center",
    // width: Dimensions.get("screen").width - 20,
  },
  scrollView: {
    backgroundColor: "#141414",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    gap: 20,
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 5,
    // marginHorizontal: 20,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#cccc",
  },
});
