import React, {Component} from 'react';
import { ScrollView, RefreshControl } from "react-native";
import {View, StyleSheet, Platform, Text} from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts'
import { CheckBox } from 'react-native'
    class filter extends Component {
        constructor(props){
            super(props);
            this.state = {
                refreshing: false,
                NbPosts:0,
                NbUtilisateurs:0,
                NbReponses:0,
                checked: false,
            }
        }
   check(){
    console.log('ok')
    // let etat = this.state.checked
    // this.setState({checked: !etat})
    //   // this.setState({refreshing:true});
   }
    render() {    
         
        return (
                  
            <View>
                <CheckBox
  title='Click Here'
  onPress={this.check()}
/>
            </View> 
        )
    }
    }
 
export default filter;