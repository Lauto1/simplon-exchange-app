import React, {Component} from 'react';
import { ScrollView, RefreshControl } from "react-native";
import {View, StyleSheet, Platform, Text} from 'react-native';
import Graph from '../containers/Graph'

const Statistique = props => {
    return (
        <ScrollView>
            <Text>Component de Sodalin</Text> 
            <Text>Component de Tarik et Luca</Text>
             
            <Graph/>                   
        </ScrollView>
    )
}

export default Statistique;