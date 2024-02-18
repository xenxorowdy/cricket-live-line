import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
const tobat = ["rohit sharma", "jos butler", "sam ", "sanju samson"];
const Live = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tvStyle}>
        <Text style={{ color: "#292A2D" }}> 0 </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.TextColor}>Run Rate: 8.49</Text>
        <Text style={styles.TextColor}>Ball Rem: 14</Text>
      </View>
      <View>
        <View style={styles.box}>
          <Text style={styles.TextColor}>Winning Probability</Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={styles.TextColor}> Fav:</Text>
            <Text style={styles.TextColor}>71 </Text>
            <Text style={styles.TextColor}>72</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.box}>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <Text style={styles.TextColor}>20 Over Runs:</Text>
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
      <View style={{ flexDirection: "column", padding: 0, flex: 1 }}>
        <View
          style={[
            styles.box,
            { borderBottomWidth: 0.5 },
            { borderColor: "#fff" },
          ]}
        >
          <Text style={styles.TextColor}>Bowler</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
            }}
          >
            <Text style={styles.TextColor}>O</Text>
            <Text style={styles.TextColor}>R</Text>
            <Text style={styles.TextColor}>Wkt</Text>
            <Text style={styles.TextColor}>Eco</Text>
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
            {[
              1, 3, 45, 1, 3, 45, 1, 3, 45, 1, 3, 45, 1, 3, 45, 1, 3, 45, 1, 3,
              45, 1, 3, 45,
            ].map((item, index) => (
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
                <Text key={index} style={{color:'#fff',fontWeight:'500'}}>
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
          {tobat.join(", ")}
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
  rowBox: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#292A2D",
    paddingHorizontal: 5,
    paddingVertical: 4,
    width: Dimensions.get("window").width,
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
  ballShape: {
    borderRadius: 18,
  },
});
