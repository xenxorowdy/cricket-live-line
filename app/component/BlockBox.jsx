import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Boxes } from "./Carousel";

export default function BlockBox() {
  return (
    <View style={styles.blockLiveContainer}>
      {[1, 34, 56, 67].map((e, index) => (
        <Boxes e={e} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  blockLiveContainer: {
    gap: 20,
    width: "97%",
    alignItems: "center",
    paddingBottom: 20,
  },
});
