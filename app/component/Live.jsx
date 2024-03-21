import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import ShowAnimation from "./ShowAnimation";
import SvgComponent from "./cricket";
import { checkColor } from "./styleSheet";
import CusText from "./CusText";
import { checkBGColor, inningsuffix, ratefetch } from "../utils";
import { Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
const tobat = ["rohit sharma", "jos butler", "sam ", "sanju samson"];
const option =
{
  "ball": "Ball Start",
  "wicket": "Wicket",
};

const Live = ({ matchDetail = [] }) => {
  const getValue = async (keyToRetrieve) => {
    try {
      const value = await AsyncStorage.getItem(keyToRetrieve);
      console.log("retrival value", value, value, mute);
      return SetMute(value ?? 'false');
    } catch (error) {
      return SetMute('false');
    }
  };
  const [mute, SetMute] = useState("false");


  const handleMute = () => {
    const value = mute == "true" ? "false" : "true";
    storeValue("mute", `${value}`);
    SetMute(value);
  };
  let str = '';
  const scrollViewRef = useRef(null);

  useEffect(() => {
    getValue("mute");
  }, [])

  // if (scrollViewRef.current) {
  //   scrollViewRef.current.scrollToEnd({ animated: false });
  // }

  useEffect(() => {
    if (scrollViewRef.current) {
      const time = setTimeout(() => {

        if (scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({ animated: false });
        }
      }, 500);
    }

  }, []);
  const storeValue = async (key, value) => {
    await AsyncStorage.setItem(key, value)
      .then(() => {
        console.log("Value saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving value:", error);
      });
  };
  // useEffect(() => {
  //   if (matchDetail.length) {
  //     getScore();
  //   }
  // }, [matchDetail])
  return (
    <View style={styles.container}>
      <View style={[{ alignContent: "center", alignItems: "center", width: "100%" }]} >
        <View style={{ flexDirection: "column", width: "100%", alignItems: "center" }} >
          <View style={styles.tvStyle}>
            {mute == 'false' ? (
              <Ionicons
                onPress={handleMute}
                name="volume-mute-outline"
                size={24}
                color="white"
                style={{ position: "absolute", top: 5, left: 5 }}
              />
            ) : (
              <Ionicons
                onPress={handleMute}
                name="volume-high-outline"
                size={24}
                color="white"
                style={{ position: "absolute", top: 5, left: 5 }}
              />
            )}

            <ShowAnimation mute={mute} style={styles.tvStyle} value={matchDetail?.first_circle} />
            <Text
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                fontWeight: "600",
                fontSize: 15,
                color: checkColor('Live'),
              }}
            >
              LIVE
            </Text>
          </View>
          <View style={[styles.boxtv]} >
            <View style={{ flexDirection: "row", gap: 4, alignItems: "center", padding: 5 }}>
              <CusText>{matchDetail?.battingTeam}:</CusText>
              <CusText style={{ fontWeight: "600" }} >{matchDetail?.battingScore}
                {/* {matchDetail?.team_a} */}
                {/* {team_a_score} */}
              </CusText>
              {matchDetail?.powerplay == 1 &&
                <View style={styles.powerplay}>

                  <Text style={{ fontWeight: "600", color: "#FFC700", fontSize: 15 }} > P </Text>
                </View>
              }
            </View>
            <View style={{ flexDirection: "row", gap: 2, alignIrtems: "center", padding: 5 }}>
              <CusText>{matchDetail?.secbattingTeam}:</CusText>
              <CusText style={{ fontWeight: "600" }} >{matchDetail?.secbattingScore}
                {/* {matchDetail?.team_a} */}
                {/* {team_a_score} */}
              </CusText>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.box,
          { borderBottomWidth: 0.5 },
          { borderColor: "#fff" },
        ]}
      >
        <Text style={styles.TextColor}>Last 4 Overs</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
        <ScrollView
          horizontal
          ref={scrollViewRef}
          contentContainerStyle={{ alignItems: 'flex-end' }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
            {(matchDetail?.last4overs)?.map((item, index) => (
              <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <CusText style={{ fontWeight: "700", fontSize: 16, color: "#2D2B2A" }} >Over {item.over}</CusText>
                {
                  item.balls.map((ele, idx) =>
                    <View
                      style={{
                        height: 25,
                        backgroundColor: checkBGColor(ele?.toLowerCase()),
                        width: 25,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text key={idx} style={{ color: (ele == 0 || ele > 3) ? "white" : "black", fontWeight: "bold", fontSize: 12, textAlign: "center", width: 28 }}  >
                        {ele}
                      </Text>
                    </View>
                  )
                }
                < CusText style={{ fontWeight: "600", fontSize: 16, color: "#2D2B2A" }} >= {" "} {item.runs}</CusText>
                <Divider style={{ width: 1, height: '100%' }} />
                <View style={styles} />
              </View>
            ))}
          </View>
        </ScrollView >
      </View>
      <View style={[styles.box, { flexDirection: "column", gap: 20, borderRadius: 2, width: "100%", paddingVertical: 10 }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.TextColor}>Run Rate: {matchDetail?.curr_rate}</Text>
          {matchDetail?.rr_rate &&
            <Text style={styles.TextColor}>RRR: {matchDetail?.rr_rate}</Text>}
          {matchDetail?.ball_rem &&
            <Text style={styles.TextColor}>Ball Remaning: {matchDetail?.ball_rem}</Text>
          }
        </View>
        {matchDetail?.target &&
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.TextColor}>Run Needed: {matchDetail?.run_need}</Text>
            <Text style={styles.TextColor}>Target: {matchDetail?.target}</Text>
          </View>
        }
      </View>
      <View>
        <View style={styles.box}>
          <Text style={[styles.TextColor, { fontWeight: "600", fontSize: 16 }]}>Winning Probability</Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={styles.TextColor}> {matchDetail?.fav_team}</Text>
            <Text style={[styles.TextColor, { backgroundColor: "red", textAlign: "center", paddingVertical: 3, paddingHorizontal: 5, color: "#fff", fontSize: 16, fontWeight: "700" }]}>{ratefetch(matchDetail?.min_rate)} </Text>
            <Text style={[styles.TextColor, { backgroundColor: "green", textAlign: "center", paddingVertical: 3, paddingHorizontal: 5, color: "#fff", fontSize: 16, fontWeight: "700" }]}>{ratefetch(matchDetail?.max_rate)}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        {matchDetail?.s_ovr &&
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 3, textAlign: "center", alignItems: "center" }}>
              <Text style={styles.TextColor}>
                {matchDetail?.s_ovr} Over Runs:
              </Text>
              <Text style={[styles.TextColor, styles.minStyle]}>{matchDetail?.s_min} </Text>
              <Text style={styles.maxStyle}>{matchDetail?.s_max}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "60%",
                justifyContent: "flex-end",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Text style={styles.TextColor}> R X B:</Text>
              <Text style={styles.minStyle}> {matchDetail?.s_run} </Text>
              <Text style={styles.maxStyle}> {matchDetail?.s_ball} </Text>
            </View>
          </View>
        }
        {null &&
          <View style={styles.box}>
            <View style={{ flexDirection: "row", gap: 3, textAlign: "center", alignItems: "center" }}>
              <Text style={styles.TextColor}>
                {matchDetail?.current_inning}{inningsuffix(matchDetail?.current_inning)}  Inning's Total Runs:
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "60%",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={styles.minStyle}> {matchDetail?.s_run} </Text>
              <Text style={styles.maxStyle}> {matchDetail?.s_ball} </Text>
            </View>
          </View>
        }
      </View>
      <View style={{ flexDirection: "column", padding: 0, flex: 1 }}>
        <View
          style={[
            styles.box,
            { borderBottomWidth: 0.5, marginBottom: 0 },
            { borderColor: "#fff" },
          ]}
        >
          <Text style={styles.TextColor}>Batter</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 11,
            }}
          >
            <Text style={styles.TextColor}>R</Text>
            <Text style={styles.TextColor}>B</Text>
            <Text style={styles.TextColor}>4s</Text>
            <Text style={styles.TextColor}>6s</Text>
            <Text style={[styles.TextColor, { width: 35 }]}>SR</Text>
          </View>
        </View>
        <FlatList
          data={matchDetail?.batsman}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({ item }) => (
            <View style={[styles.rowBox]}>
              <Text
                style={[
                  styles.TextColor,
                  {
                    textAlign: "center",
                  },
                ]}
              >
                {item?.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <Text style={styles.TextColor}>{item.run}</Text>
                <Text style={styles.TextColor}>{item.ball}</Text>
                <Text style={styles.TextColor}>{item.fours}</Text>
                <Text style={styles.TextColor}>{item.sixes}</Text>
                <Text style={[[styles.TextColor, { width: 35 }]]}>{Math.round(item.strike_rate)}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.rowBox} >

          <CusText>Partnership: {matchDetail?.partnership?.run?.toString() ?? '-'} ({matchDetail?.partnership?.ball?.toString() ?? '-'})</CusText>

          {matchDetail?.lastwicket?.player &&
            <CusText>Last Wkt: {matchDetail?.lastwicket?.player?.toString() + " " + matchDetail?.lastwicket?.run?.toString() + "(" + matchDetail?.lastwicket?.ball?.toString() + ")"}   </CusText>
          }
        </View>
      </View>
      <View style={{ flexDirection: "column", padding: 0, flex: 1 }}>
        <View
          style={[
            styles.box,
          ]}
        >
          <Text style={styles.TextColor}>bowler</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 15,

            }}
          >
            <Text style={styles.TextColor}>O</Text>
            <Text style={styles.TextColor}>R</Text>
            <Text style={styles.TextColor}>Wkt</Text>
            <Text style={[styles.TextColor, { width: 32 }]}>Eco</Text>
          </View>

        </View>

        <FlatList
          data={[matchDetail?.bolwer]}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({ item }) => (
            <View style={[styles.rowBox]}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={[styles.TextColor]}>{item?.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 14,
                }}
              >
                <Text style={styles.TextColor}>{item?.over}</Text>
                <Text style={styles.TextColor}>{item?.run}</Text>
                <Text style={styles.TextColor}>{item?.wicket}</Text>
                <Text style={styles.TextColor}>{item?.economy}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ flexDirection: "column", padding: 0, flex: 1 }}>
      </View>
      <View style={{ flexDirection: "column", padding: 0, flex: 1 }}>
        <View
          style={[
            styles.box,
            { borderBottomWidth: 0.5 },
            { borderColor: "#fff" },
          ]}
        >
          <Text style={styles.TextColor}>Yet to bat</Text>
        </View>

        <Text style={[styles.TextColor, styles.rowBox]}>
          {matchDetail?.yet_to_bet?.join(", ")}
        </Text>
      </View>
    </View >
  );
};

export default Live;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#EAEAEA",
    gap: 8,
  },
  powerplay: { backgroundColor: "#000", textAlign: "center", paddingVertical: 1, paddingHorizontal: 2, color: "#FFC700", border: 1, borderColor: "#FFC700", fontSize: 16, fontWeight: "700", alignItems: "center" },
  minStyle: { backgroundColor: "red", textAlign: "center", paddingVertical: 3, paddingHorizontal: 5, color: "#fff", fontSize: 16, fontWeight: "700" },
  maxStyle: { backgroundColor: "green", textAlign: "center", paddingVertical: 3, paddingHorizontal: 5, color: "#fff", fontSize: 16, fontWeight: "700" },
  box: {
    backgroundColor: "#F9F6EE",
    padding: 10,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    borderRadiusTopLeft: 10,

    justifyContent: "space-between",
    paddingVertical: 15,
  },
  boxtv: {
    backgroundColor: "#F9F6EE",
    paddingVertical: 8,
    width: "97%",
    borderRadius: 10,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  rowBox: {
    alignContent: "center",
    alignItems: "center",

    backgroundColor: "#F9F6EE",
    paddingHorizontal: 12,
    paddingVertical: 4,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

  },
  tvStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
    height: 120,
    flexDirection: "row",
    borderWidth: 3, // Border width
    borderColor: "white", // Border color
    borderRadius: 6, // Border radius (optional, for rounded corners)
    backgroundColor: "#000",
  },
  TextColor: {
    color: "#171717",
    minWidth: 25,
  },
  divider: {
    borderWidth: 0.4,
    borderColor: "darkgrey",
    width: "100",
  },
  ballShape: {
    borderRadius: 18,
  },
});
