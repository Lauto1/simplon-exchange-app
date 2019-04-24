import React, {Component} from 'react';
import { ScrollView, RefreshControl } from "react-native";
import {View, StyleSheet, Platform, Text} from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts'
    class graph extends Component {
        constructor(props){
            super(props);
            this.state = {
                refreshing: false,
                NbPosts:0,
                NbUtilisateurs:0,
                NbReponses:0,
            }
        }
        fetchData = () => {
            this.setState({refreshing:true});
            this.setState({NbPosts: this.props.NbPosts});
            this.setState({NbUtilisateurs: this.props.NbUtilisateurs});
            this.setState({NbReponses: this.props.NbReponses});

            // console.log('okokokokokok') 
            // console.log(this.props.NbPosts) 
            // console.log(this.state.NbPosts)          
            //  this.props.actions.getNbPost();
            this.setState({refreshing:false});
        };
    



        
    
    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: this.state.NbPosts,
                
            },
            {
                month: new Date(2015, 1, 1),
                apples: this.state.NbUtilisateurs,
                
            },
            {
                month: new Date(2015, 2, 1),
                apples: this.state.NbReponses,
                
            },
        ]
 
        const colors = [ '#7b4173' ]
        const keys   = [ 'apples',]
        return (
            <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.fetchData}
                />
            }
            >
            <View><StackedBarChart
                style={ { height: 200, backgroundColor:'#d17a22' } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                contentInset={ { top: 30, bottom: 30 } }
            />
            <Text>Posts: {this.state.NbPosts}</Text>
            <Text>Utilisateurs: {this.state.NbUtilisateurs}</Text>
            <Text>Reponses: {this.state.NbReponses}</Text>

            </View> 
            </ScrollView>
        )
    }
    }
 
export default graph;