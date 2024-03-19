import React, { useState } from "react";
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Swiper from "react-native-swiper";

import CusText from "./CusText";
import { Link } from "expo-router";
import { formatDateAndTime, ratefetch } from "../utils";
import { commonStyle } from "./styleSheet";

const MyComponent = () => {
  // const navigation = useNavigation();

  // const handleRedirect = () => {
  //   navigation.navigate("DetailsScreen", { itemId: 123 });
  // };

  return <Button onPress={handleRedirect} title="Go to Details" />;
};
const width = Dimensions.get("screen").width - 10;

export default function Carousel({ liveMatch = [] }) {
  /**
   * A function that handles the change of index.
   *
   * @param {type} ele - the element representing the changed index
   * @return {type} undefined
   */
  const handleIndexChanged = (ele) => {
    console.log("handleIndexChange", ele);
  };
  const dividerStyles = [styles.divider && styles.dividerInset];
  if (liveMatch?.length === 0) {
    return <CusText>No live match</CusText>;
  }

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      {liveMatch?.map((match, index) => (
        <Boxes match={match} key={index} />
      ))}
    </Swiper>
  );
}

export const Boxes = ({ e, match }) => {
  const [handlePress, setHandlePress] = useState();
  const handleBoxPress = () => {
    console.log("hello");
  };
  const matchStatusDisplay = () => {
    return (
      match?.need_run_ball ||
      match?.trail_lead ||
      match?.toss ||
      match?.venue ||
      ""
    );
  };
  return (
    <Link href={"/match/" + match?.match_id + "/"} style={{ borderRadius: 12 }}>
      <View onPress={handleBoxPress} style={styles.slide1}>
        <View style={styles.displayFlex}>
          <View style={{ width: "75%" }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
              {match?.series}
            </Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ ...styles.text, ...styles.textSmallText }}>
                {/* {formatDateAndTime(match?.dateTimeGMT + "Z")} */}
                {match?.match_date + " " + match?.match_time + " "}

                {/* Today 09:10 AM */}
              </Text>
              <CusText style={styles.textSmallText}>
                {match?.match_type}
              </CusText>
            </View>
          </View>
          {match?.match_status && (
            <View
              style={[commonStyle({ status: match?.match_status }).liveIcon]}
            >
              <Text style={[styles.text, { fontWeight: 600 }]}>
                •{match?.match_status}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.divider} />
        {/* <Text style={styles.text}>Hello Swiper</Text> */}
        <View
          style={{
            ...styles.displayFlex,
            height: 100,
            padding: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <View style={{ gap: 5, alignItems: "center" }}>
              <Image
                source={{
                  uri: match?.team_a_img || "",
                }}
                style={{ width: 30, height: 30, borderRadius: 18 }}
              />
              <CusText>{match?.team_a_short}</CusText>
            </View>
            {match?.team_a_scores ? (
              <View>
                <CusText>{match?.team_a_scores}</CusText>
                <CusText>{match?.team_a_over} over</CusText>
              </View>
            ) : (
              <View>
                <CusText>Yet to Bat</CusText>
              </View>
            )}
          </View>
          <AntDesign color="white" name="swap" size={20} />
          <View
            style={{
              flexDirection: "row-reverse",
              gap: 10,
              alignItems: "center",
            }}
          >
            <View style={{ gap: 5, alignItems: "center" }}>
              <Image
                source={{
                  uri: match?.team_b_img || "",
                }}
                style={{ width: 30, height: 30, borderRadius: 18 }}
              />
              <CusText>{match?.team_b_short}</CusText>
            </View>
            {match?.team_b_scores ? (
              <View>
                <CusText>{match?.team_b_scores}</CusText>
                <CusText>{match?.team_b_over} over</CusText>
              </View>
            ) : (
              <View>
                <CusText>Yet to Bat</CusText>
              </View>
            )}
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.displayFlexBottom}>
          <View>
            <CusText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[styles.text, { width: width - 150 }]}
            >
              {matchStatusDisplay() || ""}
            </CusText>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={styles.text}> {match?.fav_team || ""} </Text>
            <View
              style={{
                backgroundColor: "green",
                minWidth: 30,
                height: 18,
                borderRadius: 4,
                alignItems: "center",
              }}
            >
              <Text>{ratefetch(match?.min_rate)}</Text>
            </View>
            <View
              style={{
                backgroundColor: "yellow",
                minWidth: 30,
                height: 18,
                borderRadius: 4,
                alignItems: "center",
              }}
            >
              <Text>{ratefetch(match?.max_rate)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 222,
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    paddingHorizontal: 5,
    backgroundColor: "#3c3c3c",
    color: "#FFFFFF",
    minHeight: 180,
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width - 10,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#92BBD9",
    width: 90,
  },
  text: {
    color: "#fff",
  },
  textSmallText: {
    fontSize: 9,
  },
  displayFlexBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    minHeight: 30,
    gap: 4,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 1,
  },
  displayFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 40,
    gap: 8,
    alignContent: "center",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#eeeee4",
    height: 0.5,
    marginVertical: 2,
  },
  dividerInset: {
    marginHorizontal: 20,
  },
});
AppRegistry.registerComponent("myproject", () => SwiperComponent);
