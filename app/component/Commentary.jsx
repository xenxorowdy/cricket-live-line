import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import MatchTopHeading from "./matchTopHeading";
import CusText from "./CusText";
const width = Dimensions.get("window").width;
const Commentary = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View
          style={{ backgroundColor: "#764abc", paddingVertical: 14, width }}
        >
          <MatchTopHeading />
        </View>
        {/* box of each over */}
        <View style={styles.box}>
          <CusText style={{ paddingHorizontal: 8 }}>
            Day 3: Stump IND 445 & 122/3 lead by 332 runs
          </CusText>
        </View>
        <View
          style={[
            styles.rowBox,
            { paddingVertical: 10, paddingHorizontal: 10 },
          ]}
        >
          <CusText style={{ paddingHorizontal: 8 }}>
            {" "}
            <CusText style={{ fontWeight: 600, padding: 4 }}>
              End of 51st over:
            </CusText>
            0 10 1 13 3 4 (x Runs){" "}
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
              <CusText style={{ fontSize: 20, fontWeight: "800" }}>
                196-2
              </CusText>
              <CusText style={{ fontSize: 14, fontWeight: "700" }}>IND</CusText>
            </View>
            <View style={{ gap: 10 }}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: width - 150,
                }}
              >
                <CusText>kuldeep</CusText>
                <CusText>kuldeep</CusText>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: width - 150,
                }}
              >
                <CusText>kuldeep</CusText>
                <CusText>kuldeep</CusText>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: width - 150,
                }}
              >
                <CusText>kuldeep</CusText>
                <CusText>kuldeep</CusText>
              </View>
            </View>
          </View>
        </View>
        {/* //Commentary */}
        <View style={{ gap: 20 }}>
          {[23, 354, 532, 23, 354, 532].map((e) => (
            <View style={{ marginHorizontal: 10, gap: 5 }}>
              <CusText>50.6 Rehan</CusText>
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
                <CusText>0</CusText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
