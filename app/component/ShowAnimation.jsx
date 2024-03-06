import { View, Text, Image } from "react-native";
import React from "react";

const ShowAnimation = ({ style, value, runs = 0 }) => {
  switch (value) {
    case "Wicket":
      <ShowAnimationValue display="Wicket" />;
      break;

    case "Wides":
      return <ShowAnimationValue display="Wide" />;
    case "Byes":
      return <ShowAnimationValue display="Bye" />;
    case "No Ball":
      return <ShowAnimationValue display="No Ball" />;
    case "Ball Start":
      return <ShowAnimationValue display="Ball Start" />;
    case "Run":
      return <ShowAnimationValue display={runs + " Run"} />;
    case "LBW":
      return <ShowAnimationValue display="LBW" />;
    case "Out":
      return <ShowAnimationValue display="Out" />;
    default:
      return;
  }
};

const ShowAnimationValue = ({ display = "Ball Start" }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={require("../../assets/ball.gif")}
        style={{ width: 60, height: 60 }}
      />
      <Text style={{ color: "#292A2D", fontSize: 30, fontWeight: 500 }}>
        {display}
      </Text>
    </View>
  );
};

export default ShowAnimation;
