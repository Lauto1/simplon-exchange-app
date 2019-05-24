import React from "react";
import { StyleSheet, Text } from "react-native";
import { greyColor, subtitleFontSize } from "../../helpers/styleGuidelines";

const Description = props => {
  return (
    <Text style={styles.description}>
      Statistiques sur le nombre d'utilisateurs, de postes et de réponses sur une
      période donnée
    </Text>
  );
};

// les styles à appliquer pour les descriptions
const styles = StyleSheet.create({
  description: {
    color: greyColor,
    fontWeight: "600",
    fontSize: subtitleFontSize,
    textAlign: "center",
    padding: 20,
    borderRadius: 20
  }
});

export default Description;
