import React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MatchTopHeading from "./matchTopHeading";
import CusText from "./CusText";
const width = Dimensions.get("window").width;
const MatchComGuide = ({ data }) => (<View
  style={[
    styles.rowBox,
    { paddingVertical: 10, paddingHorizontal: 10 },
  ]}
>
  <CusText style={{ paddingHorizontal: 8 }}>
    {" "}
    <CusText style={{ fontWeight: 600, padding: 4 }}>
      {data?.title}:
    </CusText>
    {" "}{data?.runs} Runs{" "}
  </CusText>
  <View style={{ flexDirection: "row", gap: 8 }}>
    <View
      style={{
        backgroundColor: "#5a18c7",
        width: 120,
        height: 90,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CusText style={{ fontSize: 20, fontWeight: 700 }}>
        {data?.team_score}-{data?.team_wicket}
      </CusText>
      <CusText style={{ fontSize: 14, fontWeight: 700 }}>{data?.team}</CusText>
    </View>
    <View style={{ gap: 10 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: width - 150,
        }}
      >
        <CusText>{data?.batsman_1_name}</CusText>
        <CusText>{data?.batsman_1_runs} ({data?.batsman_1_balls}) </CusText>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: width - 150,
        }}
      >
        <CusText>{data?.batsman_2_name}</CusText>
        <CusText>{data?.batsman_2_runs} ({data?.batsman_2_balls}) </CusText>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: width - 150,
        }}
      >
        <CusText>{data?.bolwer_name}</CusText>
        <CusText>{data?.bolwer_overs}-{data?.bolwer_maidens}-{data?.bolwer_runs}-{data?.bolwer_wickets}</CusText>
      </View>
    </View>
  </View>
</View>);
const Commentary = (props) => {
  console.log(props, "description");
  const { matchCommentry, matchInfo } = props;
  const overyByInning = Object.keys(matchCommentry ?? []) ?? [];
  return (

    <View style={styles.container}>
      <View
        style={{ backgroundColor: "#764abc", paddingVertical: 14, width }}
      >
        <MatchTopHeading team_b_img={matchInfo.team_b_img}
          team_a_img={matchInfo.team_a_img}
          team_a={matchInfo.team_a_short}
          team_b={matchInfo.team_b_short} />
      </View>
      {/* box of each over */}
      {/* <View style={styles.box}>
          <CusText style={{ paddingHorizontal: 8 }}>
            Day 3: Stump IND 445 & 122/3 lead by 332 runs
          </CusText>
        </View> */}
      {/* <View
          style={[
            styles.rowBox,
            { paddingVertical: 10, paddingHorizontal: 10 },
          ]}
        >
          <CusText style={{ paddingHorizontal: 8 }}>
            {" "}
            <CusText style={{ fontWeight: 600, padding: 4 }}>
              End of 51st over:
            </CusText>c
            0 10 1 13 3 4 (x Runs){" "}
          </CusText>

        </View> */}
      {/* //Commentary */}
      <View style={{ gap: 15 }}>
        <FlatList
          data={overyByInning}
          renderItem={({ item }) => (
            <ListCommentry key={item} data={matchCommentry[item]} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>

  );
};

const ListCommentry = ({ data }) => {
  return Object.values(data).map((values) =>
    values.map((value) =>
      value?.data?.title?.includes("END OF OVER :") ?
        <MatchComGuide data={value.data} />
        :

        <View style={{ margin: 10, gap: 5 }}>
          <CusText>
            {value?.data?.overs} {value?.data?.title}{" "}
          </CusText>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                backgroundColor: "#757575",
                width: 22,

                height: 22,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <CusText>{value?.data?.runs}</CusText>
            </View>
            <CusText>{value?.data?.description}</CusText>
          </View>
        </View >


    )
  );
};

export default Commentary;
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#141414",
    height: Dimensions.get("window").height,

    // marginHorizontal: 20,
  },
  box: {
    backgroundColor: "#292A2D",
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginVertical: 3,
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowBox: {
    backgroundColor: "#292A2D",
    paddingHorizontal: 5,
    paddingVertical: 4,
    width: width,
    gap: 14,
    flexDirection: "column",
  },
  container: {
    backgroundColor: "#141414",
    color: "#EAEAEA",
    width: width,

    gap: 8,
  },
});
