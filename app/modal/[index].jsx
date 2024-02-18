import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MatchTopHeading from "../component/matchTopHeading";
import CusText from "../component/CusText";
import { CusLargeText } from "../utils";
import { Entypo } from "@expo/vector-icons";

const Modal = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>Modal</Text>
      <MatchTopHeading />
      <Pressable
        style={{
          margin: 10,
          padding: 10,
          marginHorizontal: 20,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#21DA8C",
        }}
      >
        <CusText style={{ fontSize: 16, fontWeight: 600 }}>Playing XI</CusText>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingLeft: 10,
          width: "105%",
        }}
      >
        <View style={{ gap: 10 }}>
          {[342, 353, 3523].map((ele) => (
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <Entypo name="user" size={24} color="grey" />
              <View>
                <CusText style={{ fontSize: 15, fontWeight: 600 }}>
                  {" "}
                  Rohit sharma
                </CusText>
                <CusText>batter</CusText>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.divider}></View>
        <View style={{ gap: 10 }}>
          {[342, 353, 3523, 342, 353, 3523, 342, 353, 3523].map((ele) => (
            <View
              style={{
                flexDirection: "row-reverse",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Entypo name="user" size={24} color="grey" />
              <View style={{ alignItems: "flex-end" }}>
                <CusText style={{ fontSize: 15, fontWeight: 600 }}>
                  {" "}
                  Rohit sharma
                </CusText>
                <CusText>batter</CusText>
              </View>
            </View>
          ))}
        </View>
        <View>
          <CusText></CusText>
        </View>
      </View>
    </ScrollView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#141414",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,

    // marginHorizontal: 20,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#cccc",
  },
});
