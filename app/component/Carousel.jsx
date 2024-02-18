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

import Swiper from "react-native-swiper";

import CusText from "./CusText";
import { Link } from "expo-router";

const MyComponent = () => {
  // const navigation = useNavigation();

  // const handleRedirect = () => {
  //   navigation.navigate("DetailsScreen", { itemId: 123 });
  // };

  return <Button onPress={handleRedirect} title="Go to Details" />;
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide1: {
    paddingHorizontal: 5,
    backgroundColor: "#3c3c3c",
    color: "#fffff",
    minHeight: 180,
    justifyContent: "center",
    width: Dimensions.get("screen").width,
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
    fontSize: 8,
  },
  displayFlexBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    minHeight: 30,
    gap: 8,
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 1,
  },
  displayFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
    minHeight: 40,
    gap: 8,
    alignContent: "center",
    alignItems: "center",
  },
  liveIcon: {
    flex: 1,
    width: 40,
    height: 19,
    backgroundColor: "red",
    flex: "right",
    justifyContent: "flex-end",
    borderRadius: 2,
    alignItems: "center",
    alignContent: "center",
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

export default function Carousel() {
  const handleIndexChanged = (ele) => {
    console.log("handleIndexChange", ele);
  };
  const dividerStyles = [styles.divider && styles.dividerInset];
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      {[1, 34, 56, 67].map((e, index) => (
        <Boxes e={e} key={index} />
      ))}
    </Swiper>
  );
}
export const Boxes = ({ e }) => {
  const [handlePress, setHandlePress] = useState();
  const handleBoxPress = () => {
    console.log("hello");
  };
  return (
    <Link href={"/match/323"}>
      <View onPress={handleBoxPress} style={styles.slide1}>
        <View style={styles.displayFlex}>
          <View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
              south Africa Women south Africa Women south Africa Women
            </Text>
            <Text style={{ ...styles.text, ...styles.textSmallText }}>
              Today 09:10 AM
            </Text>
          </View>
          <View style={styles.liveIcon}>
            <Text style={styles.text}>•Live</Text>
          </View>
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
          <View style={{ flexDirection: "row", gap: 7 }}>
            <View style={{ gap: 5 }}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1380&t=st=1707284282~exp=1707284882~hmac=5cd78d1b9181a16124b293c7a38352d0e36441402e51c4e9196b6c4481488289",
                }}
                style={{ width: 30, height: 30, borderRadius: 18 }}
              />
              <CusText>{e}</CusText>
            </View>
            <View>
              <CusText>136-4</CusText>
              <CusText>28.4 over</CusText>
            </View>
          </View>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1380&t=st=1707284282~exp=1707284882~hmac=5cd78d1b9181a16124b293c7a38352d0e36441402e51c4e9196b6c4481488289",
            }}
            style={{ width: 30, height: 30, borderRadius: 18 }}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.displayFlexBottom}>
          <View>
            <CusText>rain stop delay</CusText>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={styles.text}> fav </Text>
            <Text
              style={{
                backgroundColor: "green",
                width: 25,
                height: 18,
                alignItems: "center",
              }}
            >
              {" "}
              06
            </Text>
            <Text
              style={{
                backgroundColor: "yellow",
                width: 25,
                height: 18,
                alignItems: "center",
              }}
            >
              {" "}
              45
            </Text>
          </View>
        </View>
      </View>
    </Link>
  );
};
AppRegistry.registerComponent("myproject", () => SwiperComponent);
