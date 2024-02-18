import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Table from "./Table";
import CollapseCustom from "./CollapeCustom";
import { AntDesign, Entypo, Fontisto } from "@expo/vector-icons";
import DialogScreen from "./DialogScreen";
import MatchTopHeading from "./matchTopHeading";
import { Link } from "expo-router";
const Info = () => {
  return (
    <View style={styles.container}>
      <MatchTopHeading />

      {/* <Table />
      <CollapseCustom /> */}

      <View style={styles.box}>
        <Text style={styles.TextColor}>
          {" "}
          Wed, 14 Feb, 08:00 PM at your Time
        </Text>
        <Text style={styles.TextColor}> ADKR opt to bowl</Text>
        <Text style={styles.TextColor}>
          {" "}
          Sheikh Zayed Stadium, Abu Dubai, United Arab Emirates{" "}
        </Text>
      </View>

      <Text style={styles.TextHeading}> Team Squads </Text>
      <View style={styles.box}>
        <Link
          href={"/modal/232"}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
          }}
          // onPress={() => navig÷ation.navigate("/setting")}
        >
          <Text style={styles.TextColor}> Dubai </Text>
          <Entypo color="white" name="chevron-right" />
        </Link>
        <Link
          href={"/modal/2"}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Text style={styles.TextColor}> ADKR </Text>
          <Entypo color="white" name="chevron-right" />
        </Link>
      </View>

      <Text style={styles.TextHeading}> Head to Head (H2H) </Text>
      <View
        style={[
          styles.box,
          { flexDirection: "row", justifyContent: "space-around" },
        ]}
      >
        <View style={styles.aligCenter}>
          <Text style={styles.TextColor}>5</Text>
          <Text style={styles.TextColor}>Last Match</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.aligCenter}>
          <Text style={styles.TextColor}>3</Text>
          <Text style={styles.TextColor}>NZ</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.aligCenter}>
          <Text style={styles.TextColor}>2</Text>
          <Text style={styles.TextColor}>SL</Text>
        </View>
      </View>
      <Text style={styles.TextHeading}> Venue Guide </Text>
      <View style={[styles.box]}>
        <View style={{ margin: 5, flexDirection: "row" }}>
          <Text style={[{ width: "35%", color: "#ccc" }]}>Stadium</Text>
          <Text style={[styles.TextColor, { width: "65%", fontWeight: "700" }]}>
            Sharjah Criket Stadium United arab Emirates
          </Text>
        </View>
        <View style={{ margin: 5, flexDirection: "row" }}>
          <Text style={[{ width: "35%", color: "#ccc" }]}>City</Text>
          <Text style={[styles.TextColor, { width: "65%", fontWeight: "700" }]}>
            NZ
          </Text>
        </View>
        <View style={{ margin: 5, flexDirection: "row" }}>
          <Text style={[{ width: "35%", color: "#ccc" }]}>Capacity</Text>
          <Text style={[styles.TextColor, { width: "65%", fontWeight: "700" }]}>
            SL
          </Text>
        </View>
      </View>
      <Text style={styles.TextHeading}> Venue Weather </Text>
      <View
        style={[
          styles.box,
          {
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 20,
          },
        ]}
      >
        <View style={styles.aligCenter}>
          <Fontisto name="rain" size={25} color={"#a6c8f5"} />
          <Text> Rain</Text>
          <Text style={styles.TextColor}> 1% </Text>
        </View>
        <View style={styles.aligCenter}>
          <Fontisto name="blood-drop" size={25} color={"#a6c8f5"} />
          <Text> Humidity</Text>
          <Text style={styles.TextColor}> 85% </Text>
        </View>
        <View style={styles.aligCenter}>
          <Fontisto name="wind" size={25} color={"#a6c8f5"} />

          <Text> Wind</Text>
          <Text style={styles.TextColor}> 18Km/h </Text>
        </View>
      </View>
      <Text style={styles.TextHeading}> Venue Scoring Pattern </Text>

      <View
        style={[
          styles.box,
          { flexDirection: "row", justifyContent: "space-around" },
        ]}
      >
        <View style={styles.aligCenter}>
          <Text style={styles.TextColor}>5</Text>
          <Text style={styles.TextColor}>Last Match</Text>
        </View>
        <View style={styles.aligCenter}>
          <Text style={styles.TextColor}>3</Text>
          <Text style={styles.TextColor}>NZ</Text>
        </View>
        <View style={styles.aligCenter}>
          <Text style={styles.TextColor}>2</Text>
          <Text style={styles.TextColor}>SL</Text>
        </View>
      </View>
      <DialogScreen />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoTeam: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 10,
  },
  TextColor: {
    color: "#fff",
    fontSize: 13,
    flexWrap: "wrap",
  },
  TextHeading: {
    color: "#fff",
    fontSize: 15,
  },
  matchDetailsStyle: {},
  container: {
    backgroundColor: "#141414",
    flex: 1,
    minHeight: Dimensions.get("window").height,
    flexDirection: "column",
    gap: 15,
    margin: 14,
  },
  aligCenter: {
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  box: {
    backgroundColor: "#292A2D",
    paddingVertical: 8,
    paddingHorizontal: 5,
    flexDirection: "column",
    gap: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  divider: {
    borderWidth: 0.4,
    borderColor: "darkgrey",
    width: "100",
  },
});
