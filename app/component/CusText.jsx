import { Text, StyleSheet } from "react-native";
import React from "react";
const styles = StyleSheet.create({
  globalText: {
    color: "#fff",
  },
});
const CusText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.globalText, style]} {...props}>
      {children}
    </Text>
  );
};

export default CusText;
