import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, ScrollView, TextInput } from "react-native";
import { Card, Icon } from "react-native-elements";
import {regularFontFamily,darkGreyColor, primaryColor, lightGreyColor, boldFontFamily, titleFontSize,paragraphFontSize } from "../helpers/styleGuidelines";
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view"

/**TODO Changer le text input par un editeur editeur wysiwyg */
const factoryLabels = ["Simplon","Roanne","Rodez","Carbonne","Toulouse","Vénissieux","Villeurbanne","Chambéry","Annemasse","Montpellier","Palmiers"];
class FactoryTab extends Component {
    config ={
        style:{
            borderColor:primaryColor
        },
        tabBarUnderlineStyle: {backgroundColor:primaryColor,borderWidth:1,borderColor:primaryColor},
        tabBarActiveTextColor : primaryColor,
        tabBarInactiveTextColor: darkGreyColor,
        taBarTextStyle: {
            fontFamily:regularFontFamily,
            fontSize:paragraphFontSize,
        },
        onChangeTab: (tab)=>{ this.onChangeTab(tab)}
    }
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ScrollableTabView  {...this.config} renderTabBar={() => <ScrollableTabBar  />}>
                {factoryLabels.map((factoryLabel,index)=>(<Text style={styles.Labels} tabLabel={factoryLabel} key={{factoryLabel}+index} ></Text>))}
            </ScrollableTabView>
        )
    }
    onChangeTab = (tab) => {
        console.log("changeTab",tab);
        this.props.searchByFactory(tab.ref.props.tabLabel,tab.i)
    }

}

const styles = StyleSheet.create({
    textInput: {
        minHeight: 250,
        padding: 10
    },
    Labels: {
        color:primaryColor
    }
})


export default FactoryTab;
