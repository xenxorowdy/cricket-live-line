import { View, Text, Image, Platform } from "react-native";
import React, { useEffect } from "react";
import * as Speech from "expo-speech";
import { Audio } from 'expo-av';

const ShowAnimation = ({ style, value, runs = 0, mute }) => {
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
      return <ShowAnimationValue display="Wicket" mute={mute} />;
    case "Wides":
      return <ShowAnimationValue mute={mute} display="Wide" />;
    case "Byes":
      return <ShowAnimationValue mute={mute} display="Bye" />;
    case "No Ball":
      return <ShowAnimationValue mute={mute} display="No Ball" />;
    case "Over":
      return <ShowAnimationValue mute={mute} display="Over Complete" />;
    case "Ball":
      return <ShowAnimationValue mute={mute} display="Ball Start" />;
    case "Run":
      return <ShowAnimationValue mute={mute} display={runs + " Run"} />;
    case "LBW":
      return <ShowAnimationValue mute={mute} display="LBW" />;
    case "Out":
      return <ShowAnimationValue mute={mute} display="Out" />;
    default:
      return <ShowAnimationValue mute={mute} display={value > 0 ? value + " Run" : value} />;
  }
};



const ShowAnimationValue = ({ display = "", mute = false }) => {
  const speak = (display) => {
    // const textToSay = "Ball Start";

    Speech.speak(display);
  };
  useEffect(() => {
    if (mute) return;
    speak(display);
  }, [display]);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {display.toLowerCase().includes('out') && !display.toLowerCase().includes('time') &&
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
      <Text style={{ color: "#292A2D", fontSize: 24, fontWeight: 700 }}>
        {display}
      </Text>
    </View>
  );
};

export default ShowAnimation;
