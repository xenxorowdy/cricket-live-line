import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import TopTab from "../../component/TopTab";
import CusText from "../../component/CusText";
import { Boxes } from "../../component/Carousel";
const getCurrentDate = () => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  return date.toLocaleString("en-IN", options);
};
const UserPage = () => {
  const edata = [0, 1, 2, 3, 4, 5, 6];

  const { id } = useLocalSearchParams();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(edata);
  const option = ["All", "T20", "IPL", "ODI", "Test", "Hundred", "T10"];
  const handleChange = (data, index) => setIndex(index);
  const loadMoreData = async () => {
    setLoading(true);
    // Simulate fetching more data (replace with your API call)
    const newData = [23, 43];
    setData([...data, ...newData]);
    setPage(page + 1);
    setLoading(false);
  };

  // const renderItem = ({ item }) => (
  //   <View style={{ padding: 20 }}>
  //     <Text>{item}</Text>
  //   </View>
  // );

  // const onEndReached = () => {
  //   if (!loading) {
  //     loadMoreData();
  //   }
  // };

  return (
    // <ScrollView >
    <View style={styles.scrollView}>
      <TopTab
        option={option}
        handleChangeTab={handleChange}
        currentIndex={index}
      />
      {/* {[0, 1, 2, 3, 4, 5, 6].map((ele, index) => (
        <List key={index} />
      ))} */}
      <SafeAreaView>
        <FlatList
          data={data}
          // renderItem={renderItem}
          renderItem={List}
          keyExtractor={(item, index) => `${item}_${index}`}
          // onEndReached={onEndReached}
          // onEndReachedThreshold={0.5} // Load data when 50% near the bottom
          // ListFooterComponent={() => loading && <CusText>Loading...</CusText>}
        />
      </SafeAreaView>
    </View>
    // </ScrollView>
  );
};

const List = (props) => {
  return (
    <View>
      <View style={{ marginVertical: 7 }}>
        <CusText style={{ fontWeight: 500 }}>{getCurrentDate()}</CusText>
      </View>
      <View style={styles.blockLiveContainer}>
        <Boxes e={24} />
      </View>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#141414",
    height: Dimensions.get("window").height,
    gap: 5,
    // marginHorizontal: 20,
  },
  blockLiveContainer: {
    gap: 20,
    width: "97%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});
