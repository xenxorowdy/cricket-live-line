import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TopTab = ({
  option = ["home", "live"],
  currentIndex = 0,
  handleChangeTab,
}) => {
  return (
    <ScrollView
      horizontal
      showHorizontalScrollIndicator={false}
      contentContainerStyle={styles.CategoryScrollViewStyle}
    >
      {option.map((data, index) => (
        <View
          styles={styles.CategoryScrollViewContainer}
          key={index.toString()}
        >
          <TouchableOpacity
            style={styles.CategoryScrollViewItem}
            onPress={() => handleChangeTab(data, index)}
          >
            <Text
              style={[
                styles.CategoryText,
                currentIndex == index ? { color: "orange" } : {},
              ]}
            >
              {data}
            </Text>
            {currentIndex === index && (
              <View
                style={[styles.ActiveCategory, { width: 2 + data.length * 10 }]}
              />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  CategoryScrollViewStyle: {
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",

    gap: 20,
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: 15,
  },
  ActiveCategory: {
    height: 1,

    backgroundColor: "orange",
  },
  CategoryScrollViewItem: {
    alignItems: "center",
  },
  CategoryText: {
    fontSize: 16,
    color: "lightgrey",
    marginBottom: 4,
  },
});
export default TopTab;
