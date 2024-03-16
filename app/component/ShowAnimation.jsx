import { View, Text, Image, Platform } from "react-native";
import React, { useEffect } from "react";
import * as Speech from "expo-speech";
import { Audio } from 'expo-av';

const ShowAnimation = ({ style, value, runs = 0 }) => {
  async function requestPermission() {
    if (Platform.OS === 'ios') {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need permission to access your microphone.');
      }
    }
  }
  useEffect(() => {
    requestPermission();
  }, [])

  switch (value) {
    case "Wicket":
      return <ShowAnimationValue display="Wicket" />;
    case "Wides":
      return <ShowAnimationValue display="Wide" />;
    case "Byes":
      return <ShowAnimationValue display="Bye" />;
    case "No Ball":
      return <ShowAnimationValue display="No Ball" />;
    case "Over":
      return <ShowAnimationValue display="Over Complete" />;
    case "Ball":
      return <ShowAnimationValue display="Ball Start" />;
    case "Run":
      return <ShowAnimationValue display={runs + " Run"} />;
    case "LBW":
      return <ShowAnimationValue display="LBW" />;
    case "Out":
      return <ShowAnimationValue display="Out" />;
    default:
      return <ShowAnimationValue display={value > 0 ? value + " Run" : value} />;
  }
};



const ShowAnimationValue = ({ display = "" }) => {
  const speak = (display) => {
    // const textToSay = "Ball Start";
    Speech.speak(display);
  };
  useEffect(() => {
    speak(display);
  }, [display]);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {display.toLowerCase().includes('out') &&
        <Image
          source={require("../../assets/out.png")}
          style={{ width: 60, height: 60 }}
        />}
      {display === "Wide" &&
        <Image
          source={require("../../assets/wide.webp")}
          style={{ width: 60, height: 60 }}
        />}
      {display.toLowerCase().includes('wicket') &&
        <Image
          source={require("../../assets/Wicket.png")}
          style={{ width: 60, height: 60 }}
        />}
      {display.toLowerCase().includes('review') &&
        (
          <Image
            source={require("../../assets/umpire.svg")}
            style={{ width: 60, height: 60 }}
          />
        )

      }
      {display === "Ball Start" &&
        <Image
          source={require("../../assets/ball.gif")}
          style={{ width: 60, height: 60 }}
        />}
      <Text style={{ color: "#292A2D", fontSize: 30, fontWeight: 500 }}>
        {display}
      </Text>
    </View>
  );
};

export default ShowAnimation;
