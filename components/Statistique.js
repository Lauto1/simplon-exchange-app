import React, {Component} from 'react';
import { ScrollView, RefreshControl } from "react-native";
import {View, StyleSheet, Platform, Text} from 'react-native';
import Graph from '../containers/Graph'
// import PopUp from './filters/PopUp'
import PopUp from '../containers/PopUp'

import Title from './titleDescription/Title';
import Description from './titleDescription/Description';

const Statistique = props => {
    return (
        <ScrollView>
            <Title/>
            <Description />
     
            {/* <Text>Component de Tarik et Luca</Text> */}
             
            <Graph  style={styles.graph}/> 
            <PopUp/>                  
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 40
    },
    graph: {
      marginTop: 40
    }
  });
export default Statistique;
