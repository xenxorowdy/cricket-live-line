import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CollapseCustom from "./CollapeCustom";
import { AntDesign } from "@expo/vector-icons";
import CusText from "./CusText";

const ScoreBoard = ({ matchScoreBoard }) => {
  console.log("checking score:", matchScoreBoard);
  const { result, scorecard } = matchScoreBoard;
  const team1 = scorecard?.[1]?.team;
  const team2 = scorecard?.[2]?.team;
  const team1Score = scorecard?.[1];
  const team2Score = scorecard?.[2];
  console.log("team_a_b", scorecard);
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
              uri: team1?.flag,
            }}
            style={{ width: 30, height: 30, borderRadius: 18 }}
          />
          <Text style={styles.TextColor}>{team1?.short_name}</Text>
        </View>

        <AntDesign color="white" name="swap" size={20} />
        <View style={styles.infoTeam}>
          <Text style={styles.TextColor}>{team2?.short_name}</Text>
          <Image
            source={{
              uri: team2?.flag,
            }}
            style={{ width: 30, height: 30, borderRadius: 18 }}
          />
        </View>
      </View>
      <Text style={styles.TextColor}> {result}</Text>

      <CollapseCustom>
        <ScoreBoradTable
          team={team1}
          batsman={team1Score?.batsman}
          bowler={team1Score?.bolwer}
          fallwicket={team1Score?.fallwicket}
        />
      </CollapseCustom>

      <CollapseCustom>
        <ScoreBoradTable
          team={team2}
          batsman={team2Score?.batsman}
          bowler={team2Score?.bolwer}
          fallwicket={team1Score?.fallwicket}
        />
      </CollapseCustom>
    </View>
  );
};

export const ScoreBoradTable = ({
  batsman = [],
  bowler = [],
  fallwicket = [],
  team,
}) => {
  return (
    <ScrollView>
      <View
        style={[
          styles.box,
          { borderBottomWidth: 0.5, marginBottom: 0 },
          { borderColor: "#fff" },
        ]}
      >
        <Text style={[styles.TextColor, styles.textHeader]}>Batter</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Text style={[styles.TextColor, styles.textHeader]}>R</Text>
          <Text style={[styles.TextColor, styles.textHeader]}>B</Text>
          <Text style={[styles.TextColor, styles.textHeader]}>4s</Text>
          <Text style={[styles.TextColor, styles.textHeader]}>6s</Text>
          <Text style={[styles.TextColor, styles.textHeader, { width: 45 }]}>
            SR
          </Text>
        </View>
      </View>
      <FlatList
        data={batsman}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={({ item }) => (
          <View style={[styles.rowBox]}>
            <View
              style={{ textAlign: "left", alignItems: "flex-start", gap: 3 }}
            >
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
              <Text
                style={[
                  styles.TextColor,
                  { color: "orange", fontSize: 10, width: 140 },
                ]}
              >
                {item?.out_by}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 14,
                textAlign: "center",
              }}
            >
              <Text style={styles.TextColor}>{item.run}</Text>
              <Text style={styles.TextColor}>{item.ball}</Text>
              <Text style={styles.TextColor}>{item.fours}</Text>

              <Text style={styles.TextColor}>{item.sixes}</Text>
              <Text
                umberOfLines={1}
                ellipsizeMode="tail"
                textAlign="center"
                style={[
                  styles.TextColor,
                  {
                    width: 49,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  },
                ]}
              >
                {item.strike_rate}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.rowBox}>
        <CusText>Extras:</CusText>
        <CusText>{team?.extras}</CusText>
      </View>
      <View
        style={[
          styles.box,
          { borderBottomWidth: 0.5, marginBottom: 0 },
          { borderColor: "#fff" },
        ]}
      >
        <Text fontWeight="bold" style={[styles.TextColor, styles.textHeader]}>
          Bowler
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Text fontWeight="bold" style={[styles.TextColor, styles.textHeader]}>
            O
          </Text>
          <Text fontWeight="bold" style={[styles.TextColor, styles.textHeader]}>
            M
          </Text>
          <Text fontWeight="bold" style={[styles.TextColor, styles.textHeader]}>
            R
          </Text>
          <Text fontWeight="bold" style={[styles.TextColor, styles.textHeader]}>
            W
          </Text>
          <Text
            fontWeight="bold"
            style={[
              styles.TextColor,
              styles.textHeader,
              {
                width: 45,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              },
            ]}
          >
            ER
          </Text>
        </View>
      </View>
      <FlatList
        data={bowler}
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
                gap: 14,
                textAlign: "center",
              }}
            >
              <Text style={styles.TextColor}>{item.over}</Text>
              <Text style={styles.TextColor}>{item.maiden}</Text>
              <Text style={styles.TextColor}>{item.run}</Text>

              <Text style={styles.TextColor}>{item.wicket}</Text>
              <Text
                umberOfLines={1}
                ellipsizeMode="tail"
                textAlign="center"
                style={[
                  styles.TextColor,
                  {
                    width: 49,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  },
                ]}
              >
                {item.economy}
              </Text>
            </View>
          </View>
        )}
      />
      <View
        style={[
          styles.box,
          { borderBottomWidth: 0.5, marginBottom: 0 },
          { borderColor: "#fff" },
        ]}
      >
        <Text style={[styles.TextColor, styles.textHeader]}>
          Fall of Wickets
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: 200,
          }}
        >
          <Text style={[styles.TextColor, styles.textHeader]}>Score</Text>
          <Text style={[styles.TextColor, styles.textHeader]}>Over</Text>
        </View>
      </View>

      <FlatList
        data={fallwicket}
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
              {item.player}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: 200,
              }}
            >
              <Text style={styles.TextColor}>
                {item.score}/{item.wicket}
              </Text>
              <Text style={styles.TextColor}>{item.over}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default ScoreBoard;
export const styles = StyleSheet.create({
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
  textHeader: {
    fontWeight: 700,
  },
  rowBox: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#292A2D",
    paddingHorizontal: 0,
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
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
