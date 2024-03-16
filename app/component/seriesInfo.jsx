import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CusText from "./CusText";
import { seriesList } from "../api";
import { Image } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
const SeriesInfo = () => {
  const [seriesData, setSeriesData] = useState();
  const getSeriesList = async () => {
    const seriesData = await seriesList();
    setSeriesData(seriesData?.slice(0, 3));
  };
  useEffect(() => {
    getSeriesList();
  }, []);

  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.subTopHeading}>
        <CusText>Series</CusText>

        <TouchableOpacity activeOpacity={0.75}>
          <Link href={"series"}>
            <CusText>View More </CusText>
          </Link>
        </TouchableOpacity>
      </View>
      <FlatList
        data={seriesData}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({ item, index }) => <SeriesComp key={index} item={item} />}
      />
    </View>
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
    {console.log(item)}
    {/* <Image
      source={{ uri: item.image }}
      style={{ width: 30, height: 30, tintColor: "white" }}
    /> */}
    <Image
      source={{
        uri: item?.image || "",
      }}
      style={{ width: 50, height: 50, borderRadius: 18 }}
    />
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
});
