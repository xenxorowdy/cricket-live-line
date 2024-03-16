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
import React, { useState } from "react";
import ShowAnimation from "./ShowAnimation";
import SvgComponent from "./cricket";
import { checkColor } from "./styleSheet";
import CusText from "./CusText";
const tobat = ["rohit sharma", "jos butler", "sam ", "sanju samson"];
const option =
{
  "ball": "Ball Start",
  "wicket": "Wicket",
};
const Live = ({ matchDetail = [] }) => {
  const [mute, SetMute] = useState(false);
  let last24ball = [];
  matchDetail?.last4overs?.map(
    (e) => (last24ball = [...last24ball, ...e.balls])
  );
  const handleMute = () => {
    SetMute(!mute);
  };


  return (
    <View style={styles.container}>
      <View style={[{ alignContent: "center", alignItems: "center", width: "100%" }]} >
        <View style={styles.tvStyle}>
          {mute ? (
            <Ionicons
              onPress={handleMute}
              name="volume-mute-outline"
              size={24}
              color="black"
              style={{ position: "absolute", top: 5, left: 5 }}
            />
          ) : (
            <Ionicons
              onPress={handleMute}
              name="volume-high-outline"
              size={24}
              color="black"
              style={{ position: "absolute", top: 5, left: 5 }}
            />
          )}

          <ShowAnimation style={styles.tvStyle} value={matchDetail?.first_circle} />
          <Text
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              fontWeight: 600,
              fontSize: 15,
              color: checkColor(matchDetail?.match_status),
            }}
          >
            {matchDetail?.match_status}
          </Text>
        </View>
        <View style={[styles.boxtv]} >
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
            <CusText>

            </CusText>
          </View>
        </View>
      </View>
      <View style={[styles.box, { flexDirection: "column", gap: 20, borderRadius: 2, width: "98%" }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.TextColor}>Run Rate: {matchDetail?.curr_rate}</Text>
          {matchDetail?.rr_rate &&
            <Text style={styles.TextColor}>RRR: {matchDetail?.rr_rate}</Text>}
          <Text style={styles.TextColor}>Ball Rem: {matchDetail?.ball_rem}</Text>
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
          <Text style={styles.TextColor}>Winning Probability</Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={styles.TextColor}> {matchDetail?.fav_team}</Text>
            <Text style={[styles.TextColor, { backgroundColor: "red", textAlign: "center", paddingVertical: 3, paddingHorizontal: 5, color: "#fff" }]}>{matchDetail?.min_rate} </Text>
            <Text style={[styles.TextColor, { backgroundColor: "green", textAlign: "center", paddingVertical: 3, paddingHorizontal: 5, color: "#fff" }]}>{matchDetail?.max_rate}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.box}>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={styles.TextColor}>
              {matchDetail?.match_over} Over Runs:
            </Text>
            <Text style={styles.TextColor}>172 </Text>
            <Text style={styles.TextColor}>173</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "60%",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.TextColor}> R X B:</Text>
            <Text style={styles.TextColor}> 23 </Text>
            <Text style={styles.TextColor}> 14 </Text>
          </View>
        </View>
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
      </View>
      <View style={{ flexDirection: "column", padding: 0, flex: 1 }}>
        <View
          style={[
            styles.box,
            { borderBottomWidth: 0.5 },
            { borderColor: "#fff" },
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
        <View
          style={[
            styles.box,
            { borderBottomWidth: 0.5 },
            { borderColor: "#fff" },
          ]}
        >
          <Text style={styles.TextColor}>Last 24 Balls</Text>
        </View>
        <ScrollView
          horizontal
          style={{ flexDirection: "row" }}
          showHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            {last24ball?.map((item, index) => (
              <View
                style={{
                  height: 25,
                  backgroundColor: "orange",
                  width: 25,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text key={index} style={{ color: "#fff", fontWeight: "500" }}>
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
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
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
    color: "#EAEAEA",
    gap: 8,
  },
  box: {
    backgroundColor: "#292A2D",
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginVertical: 3,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxtv: {
    backgroundColor: "#292A2D",
    paddingVertical: 8,
    marginVertical: 3,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowBox: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#292A2D",
    paddingHorizontal: 5,
    paddingVertical: 4,
    width: Dimensions.get("window").width - 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tvStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 100,
    flexDirection: "row",
    borderWidth: 3, // Border width
    borderColor: "black", // Border color
    borderRadius: 4, // Border radius (optional, for rounded corners)
    padding: 10,
    backgroundColor: "#EAEAEA",
  },
  TextColor: {
    color: "#ccc",
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
