import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = props => {
  return <Text style={styles.title}>Statistiques</Text>;
};

// les styles à appliquer pour les titles
const styles = StyleSheet.create({
  title: {
    color: "#dc3545",
    fontWeight: "600",
    fontSize: 36,
    textAlign: "center",
    marginTop: 50
  }
});

export default Title;
