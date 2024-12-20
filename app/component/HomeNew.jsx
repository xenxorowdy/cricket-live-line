import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { newsList } from "../api";
import CusText from "./CusText";
import { Link } from "expo-router";

const HomeNew = ({ id }) => {
  console.log("news", id);
  const [newList, setNewList] = useState(id);
  const getSeriesList = async () => {
    const res = await newsList();
    setNewList(res);
  };
  useEffect(() => {
    if (id !== undefined) return;
    getSeriesList();
  }, []);
  useEffect(() => {
    setNewList(id);
  }, [id]);
  return (
    <View style={{ justifyContent: "center", marginTop: 30, gap: 8 }}>
      <View style={styles.subTopHeading}>
        <CusText style={{ fontWeight: 500, fontSize: 20 }}>Top News</CusText>
        {/* <TouchableOpacity>
          <CusText>View More </CusText>
        </TouchableOpacity> */}
      </View>
      <FlatList
        data={newList}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({ item, index }) => <NewsComp key={index} item={item} />}
        style={{ gap: 10 }}
      />
    </View>
  );
};
function removeHtmlTags(text = "") {
  try {
    return text.replace(/(<([^>]+)>)/gi, "");
  } catch (error) {
    return "";
  }
}
const NewsComp = ({ item }) => (
  <Link
    href={"/news/" + item.news_id}
    style={[
      styles.subTopHeading,
      styles.titles,
      {
        justifyContent: "space-between",
        marginVertical: 10,
        rowGap: 5,
        gap: 5,
        padding: 5,
      },
    ]}
  >
    <View>
      <Image
        source={{
          uri: item?.image || "",
        }}
        style={{
          width: Dimensions.get("window").width - 20,
          height: 200,
          borderRadius: 4,
        }}
      />
    </View>

    <View style={{ paddingVertical: 0, gap: 10, paddingVertical: 10 }}>
      <CusText
        style={{
          fontWeight: 500,
          fontSize: 14,
          width: Dimensions.get("window").width - 20,
        }}
      >
        {item.title}
      </CusText>
      <CusText style={{ fontSize: 9 }}>{item?.pub_date}</CusText>
    </View>
  </Link>
);

export default HomeNew;

const styles = StyleSheet.create({
  subTopHeading: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  titles: {
    paddingHorizontal: 5,
    backgroundColor: "#3c3c3c",
    color: "#FFFFFF",
    minHeight: 30,
    justifyContent: "center",
    borderRadius: 6,

    alignContent: "center",
    marginHorizontal: 8,

    justifyContent: "center",
    // width: Dimensions.get("screen").width - 20,
  },
});
