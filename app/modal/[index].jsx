import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MatchTopHeading from "../component/matchTopHeading";
import CusText from "../component/CusText";
import { CusLargeText } from "../utils";
import { Entypo } from "@expo/vector-icons";
import { matchPlayerSquadsInfo } from "../api";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "react-native-svg";

const Modal = () => {
  const [matchPlayerInfo, setmatchPlayerInfo] = useState([]);
  const { index } = useLocalSearchParams();

  const callMatchPlayerInfo = async () => {
    const res = await matchPlayerSquadsInfo(index);

    setmatchPlayerInfo(res.data);
  };
  useEffect(() => {
    callMatchPlayerInfo();
  }, []);
  const { team_a, team_b } = matchPlayerInfo;
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaProvider style={{ marginVertical: 10 }}>
        <MatchTopHeading
          team_a_img={team_a?.flag}
          team_b_img={team_b?.flag}
          team_a={team_a?.short_name}
          team_b={team_b?.short_name}
        />
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
          <CusText style={{ fontSize: 16, fontWeight: 600 }}>Players</CusText>
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
            {team_a?.player.map((ele) => (
              <View
                style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
              >
                {console.log(ele?.image)}
                <Image
                  source={{
                    uri: ele?.image || "",
                  }}
                  style={{ width: 30, height: 30, borderRadius: 18 }}
                />
                {/* <Entypo name="user" size={24} color="grey" /> */}
                <View>
                  <CusText style={{ fontSize: 13, fontWeight: 600 }}>
                    {" "}
                    {ele.name}
                  </CusText>
                  <CusText>{ele.play_role}</CusText>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.divider}></View>
          <View style={{ gap: 10 }}>
            {team_b?.player.map((ele) => (
              <View
                style={{
                  flexDirection: "row-reverse",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                {/* <Entypo name="user" size={24} color="grey" /> */}
                <Image
                  source={{
                    uri: ele?.image || "",
                  }}
                  style={{ width: 30, height: 30, borderRadius: 18 }}
                />
                <View style={{ alignItems: "flex-end" }}>
                  <CusText style={{ fontSize: 13, fontWeight: 600 }}>
                    {" "}
                    {ele?.name}
                  </CusText>
                  <CusText>{ele?.play_role}</CusText>
                </View>
              </View>
            ))}
          </View>
          <View>
            <CusText></CusText>
          </View>
        </View>
      </SafeAreaProvider>
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
