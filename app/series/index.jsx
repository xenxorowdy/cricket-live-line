import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { seriesList } from "../api";
import { Image } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import CusText from "../component/CusText";
const SeriesInfo = () => {
  const [seriesData, setSeriesData] = useState();
  const getSeriesList = async () => {
    const seriesData = await seriesList();
    setSeriesData(seriesData);
  };
  useEffect(() => {
    getSeriesList();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ justifyContent: "center" }}>
        <FlatList
          data={seriesData}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({ item, index }) => (
            <SeriesComp key={index} item={item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const SeriesComp = ({ item }) => (
  <View
    style={[
      styles.subTopHeading,
      styles.titles,
      { justifyContent: "space-between", paddingHorizontal: 10 },
    ]}
  >
    {/* <Image
      source={{ uri: item.image }}
      style={{ width: 30, height: 30, tintColor: "white" }}
    /> */}

    <View>
      <Image
        source={{ uri: item?.image || "" }}
        style={{ width: 50, height: 50, borderRadius: 1, objectFit: "contain" }}
      />
    </View>
    <View style={{ gap: 5 }}>
      <CusText>{item.series}</CusText>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CusText>{String(item?.total_matches) ?? "-"} Matches </CusText>
        <CusText>{"*" + item.series_date + ""} </CusText>
      </View>
    </View>
    <TouchableOpacity activeOpacity={0.7}>
      <Link href={"/series/" + item.series_id}>
        <AntDesign name="right" size={24} color="white" />
      </Link>
    </TouchableOpacity>
  </View>
);

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
