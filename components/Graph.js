import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";
import { greyColor, primaryColor, boldFontFamily, } from "../helpers/styleGuidelines";
class Graph extends Component {
  render() {
    /**
        data du chart graph qui vont etre affichés.
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
        element: this.props.NbResponses
      }
    ];

    const colors = [primaryColor];
    const keys = ["element"];
    return (
      <ScrollView style={{ margin: 10 }}>
        <View>
          <StackedBarChart
            style={{ height: 200, backgroundColor: greyColor }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{ top: 30 }}
          />
          <View style={styles.container}>
            <Text>Posts:</Text><Text style={styles.text}>{this.props.NbPosts} </Text>

            <Text>Utilisateurs:</Text><Text style={styles.text}>{this.props.NbUtilisateurs} </Text>

            <Text>Reponses:</Text><Text style={styles.text}>{this.props.NbResponses} </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: primaryColor,
    fontFamily: boldFontFamily,
  },
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  }
});

export default Graph;
