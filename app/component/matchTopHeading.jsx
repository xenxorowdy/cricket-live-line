import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const MatchTopHeading = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
      }}
    >
      <View style={styles.infoTeam}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1380&t=st=1707284282~exp=1707284882~hmac=5cd78d1b9181a16124b293c7a38352d0e36441402e51c4e9196b6c4481488289",
          }}
          style={{ width: 30, height: 30, borderRadius: 18 }}
        />
        <Text style={styles.TextColor}>Dubai</Text>
      </View>

      <AntDesign color="white" name="swap" size={20} />
      <View style={styles.infoTeam}>
        <Text style={styles.TextColor}>ADKR</Text>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1380&t=st=1707284282~exp=1707284882~hmac=5cd78d1b9181a16124b293c7a38352d0e36441402e51c4e9196b6c4481488289",
          }}
          style={{ width: 30, height: 30, borderRadius: 18 }}
        />
      </View>
    </View>
  );
};

export default MatchTopHeading;

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
});
