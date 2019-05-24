import React from "react";
import { StyleSheet, Text } from "react-native";
import { primaryColor, titleFontSize, boldFontFamily, } from "../../helpers/styleGuidelines";

const Title = props => {
  return <Text style={styles.title}>Statistiques</Text>;
};

// les styles à appliquer pour les titles
const styles = StyleSheet.create({
  title: {
    color: primaryColor,
    fontFamily: boldFontFamily,
    fontSize: titleFontSize,
    textAlign: "center",
    marginTop: 30
  }
});

export default Title;
