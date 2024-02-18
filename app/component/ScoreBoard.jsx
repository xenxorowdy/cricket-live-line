import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CollapseCustom from "./CollapeCustom";
import { AntDesign } from "@expo/vector-icons";

const ScoreBoard = () => {
  return (
    <View style={{ flexDirection: "column", gap: 15, padding: 8 }}>
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
      <Text style={styles.TextColor}> Dubai Capitals won by 8 runs</Text>

      <CollapseCustom>
        <ScoreBoradTable />
      </CollapseCustom>

      <CollapseCustom>
        <ScoreBoradTable />
      </CollapseCustom>
    </View>
  );
};

const ScoreBoradTable = () => {
  return (
    <View>
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
            gap: 15,
          }}
        >
          <Text style={styles.TextColor}>R</Text>
          <Text style={styles.TextColor}>B</Text>
          <Text style={styles.TextColor}>4s</Text>
          <Text style={styles.TextColor}>6s</Text>
          <Text style={styles.TextColor}>SR</Text>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
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
              virat kolhi
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 15,
              }}
            >
              <Text style={styles.TextColor}>0</Text>
              <Text style={styles.TextColor}>0</Text>
              <Text style={styles.TextColor}>0</Text>

              <Text style={styles.TextColor}>0</Text>
              <Text style={styles.TextColor}>0</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ScoreBoard;
const styles = StyleSheet.create({
  infoTeam: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 5,
  },
  box: {
    backgroundColor: "#292A2D",
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginVertical: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowBox: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#292A2D",
    paddingHorizontal: 0,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tvStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: 100,
    borderWidth: 3, // Border width
    borderColor: "black", // Border color
    borderRadius: 4, // Border radius (optional, for rounded corners)
    padding: 10,
    backgroundColor: "#EAEAEA",
  },
  TextColor: {
    color: "#ccc",
    minWidth: 20,
  },
  divider: {
    borderWidth: 0.4,
    borderColor: "darkgrey",
    width: "100",
  },
});
