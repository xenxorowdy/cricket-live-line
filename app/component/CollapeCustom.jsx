import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";

export default function CollapseCustom({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View styles={styles.collapseContainer}>
      <TouchableOpacity
        activeOpacity={0.96}
        onPress={() => setIsCollapsed(!isCollapsed)}
      >
        <View style={styles.collapseContainer}>
          <Text>Toggle Contnt</Text>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <Text> 185-5 </Text>
            <Text>(20.0)</Text>
            {isCollapsed ? (
              <AntDesign name="down" size={18} color="white" />
            ) : (
              <AntDesign name="up" size={18} color="white" />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={{ paddingHorizontal: 15 }}>
          {/* Your expandable content here */}
          {children}
        </View>
      </Collapsible>
    </View>
  );
}
const styles = StyleSheet.create({
  collapseContainer: {
    padding: 5,
    alignItems: "center",

    marginHorizontal: 10,
    backgroundColor: "#2596be",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
  },
});
