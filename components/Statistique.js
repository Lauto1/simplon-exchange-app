import React, {Component} from 'react';
import { ScrollView, RefreshControl } from "react-native";
import {View, StyleSheet, Platform, Text} from 'react-native';
import Graph from '../containers/Graph'
import Title from './titleDescription/Title.component';
import Description from './titleDescription/Description.component';

const Statistique = props => {
    return (
        <ScrollView>
            <Title/>
            <Description />
     
            <Text>Component de Tarik et Luca</Text>
             
            <Graph/>                   
        </ScrollView>
    )
}

export default Statistique;