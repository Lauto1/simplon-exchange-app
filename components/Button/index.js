import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryColor, subtitleFontSize } from "../../helpers/styleGuidelines";

const CustomButton = ({ onPress, title, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 3,
    justifyContent: "center",
    borderWidth: 0
  },
  text: {
    fontSize: subtitleFontSize,
    color: "#ffffff",
    textAlign: "center"
  }
});
