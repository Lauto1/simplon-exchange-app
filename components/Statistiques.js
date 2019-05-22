import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Graph from "../containers/Graph";
// import PopUp from './filters/PopUp'
import PopUp from "../containers/PopUp";
import { greyColor, primaryColor, subtitleFontSize, titleFontSize, whiteColor } from "../helpers/styleGuidelines";

const Statistiques = props => {
  return (
    <ScrollView>
      <Text style={styles.title}>Statistiques</Text>
      <Text style={styles.description}>
        Statistiques sur le nombre d'utilisateurs, de postes et de réponses sur
        une période donnée.
      </Text>
      <Graph style={styles.graph} />
      <PopUp />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    marginTop: 40
  },
  graph: {
    marginTop: 40
  },
  title: {
    color: primaryColor,
    fontWeight: "600",
    fontSize: titleFontSize,
    textAlign: "center",
    marginTop: 50
  },
  description: {
    color: greyColor,
    fontWeight: "600",
    fontSize: subtitleFontSize,
    textAlign: "center",
    padding: 20,
    borderRadius: 20
  }
});
export default Statistiques;
