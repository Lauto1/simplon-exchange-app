import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts';
class graph extends Component {
  render() {
    /*
     **data du chart graph qui vont etre affichés.
     */
    const data = [
      {
        month: new Date(2015, 0, 1),
        element: this.props.NbPosts
      },
      {
        month: new Date(2015, 1, 1),
        element: this.props.NbUtilisateurs
      },
      {
        month: new Date(2015, 2, 1),
        element: this.props.NbReponses
      }
    ];

    const colors = ['#d6363e'];
    const keys = ['element'];
    return (
      /*
       **event swipe pour raffraichir les data.
       */
      <ScrollView>
        <View>
          {/* 
                configuration chart graph.
                */}
          <StackedBarChart
            style={{ height: 200, backgroundColor: '#2F3239' }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{ top: 30 }}
          />
          <Text style={styles.text}>Posts: {this.props.NbPosts}</Text>
          <Text style={styles.text}>
            Utilisateurs: {this.props.NbUtilisateurs}
          </Text>
          <Text style={styles.text}>Reponses: {this.props.NbReponses}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  text: {
    color: '#2F3239',
    marginTop: 20
  }
});

export default graph;
