import React from "react";
import { StyleSheet, Text } from "react-native";
import { greyColor, subtitleFontSize, boldFontFamily, } from "../../helpers/styleGuidelines";

const Description = props => {
  return (
    <Text style={styles.description}>
      Statistiques sur le nombre d'utilisateurs,de postes et de réponses sur une
      période donnée
    </Text>
  );
};

// les styles à appliquer pour les descriptions
const styles = StyleSheet.create({
  description: {
    color: greyColor,
    fontSize: subtitleFontSize,
    fontFamily: boldFontFamily,
    textAlign: "center",
    padding: 20,
  }
});

export default Description;
