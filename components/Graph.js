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

        /*
        ** fonction qui permet d'aller chercher les données dans le store, 
        ** d'afficher ou cacher l'icone  de rechargement .
        */
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

        /*
        **data du chart graph qui vont etre affichés.
        */
        const data = [
            {
                month: new Date(2015, 0, 1),
                element: this.state.NbPosts,
                
            },
            {
                month: new Date(2015, 1, 1),
                element: this.state.NbUtilisateurs,
                
            },
            {
                month: new Date(2015, 2, 1),
                element: this.state.NbReponses,
                
            },
        ]
 
        const colors = ['#18275f']
        const keys   = [ 'element',]
        return (
            /*
            **event swipe pour raffraichir les data.
            */
            <ScrollView 
            refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.fetchData}
                    
                />
            }
            >
            <View>
                {/* 
                configuration chart graph.
                */}
                <StackedBarChart
                style={ {  height: 200, backgroundColor: '#e1e4ef' } }
                keys={ keys }
                colors={ colors }
                data={ data }
                showGrid={ false }
                contentInset={ { top: 30} }
            />
            <Text style={styles.text}>Posts: {this.state.NbPosts}</Text>
            <Text style={styles.text}>Utilisateurs: {this.state.NbUtilisateurs}</Text>
            <Text style={styles.text}>Reponses: {this.state.NbReponses}</Text>

            </View> 
            </ScrollView>
        )
    }
    }
    const styles = StyleSheet.create({
        container: {
          margin: 20
        },
        text: {
          color: '#00008B',
          marginTop: 20
        }
      });
 
export default graph;