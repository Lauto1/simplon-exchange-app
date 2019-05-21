import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Graph from "../containers/Graph";
// import PopUp from './filters/PopUp'
<<<<<<< HEAD
import PopUp from "../containers/PopUp";
import Description from "./titleDescription/Description";
import Title from "./titleDescription/Title";
import { whiteColor } from "../helpers/styleGuidelines";
=======
import PopUp from '../containers/PopUp'

import Title from './titleDescription/Title';
import Description from './titleDescription/Description';
>>>>>>> design integration graphique

const Statistique = props => {
  return (
    <ScrollView>
      <Title />
      <Description />

      {/* <Text>Component de Tarik et Luca</Text> */}

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
  }
});
export default Statistique;
