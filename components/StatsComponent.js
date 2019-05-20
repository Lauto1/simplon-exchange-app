import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { boldFontFamily, darkGreyColor, greyColor, lightGreyColor, primaryColor, regularFontFamily, subtitleFontSize, titleFontSize } from "../helpers/styleGuidelines";

class StatsComponent extends Component {
  state = {
    questions: []
  };

  render() {
    let count = 0
    const { questions } = this.props;

    questions.forEach((question, index) => {
      count = count + question.answers.length
    });

    return (
      <Card containerStyle={{ borderRadius: 3, margin: 8, padding: 5 }}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Stats</Text>
        </View>
        {/* <TouchableOpacity> */}
        <View style={styles.btnContainer}>
          <Icon name="help-outline"></Icon>
          <Text style={styles.btnLabel}> Questions </Text>
          <Text style={styles.btnLabel}>({questions.length})</Text>
        </View>
        {/* </TouchableOpacity>
        <TouchableOpacity> */}
        <View style={styles.btnContainer}>
          <Icon name="question-answer"></Icon>
          <Text style={styles.btnLabel}> Réponses </Text>
          <Text style={styles.btnLabel}>({count})</Text>
        </View>
        {/* </TouchableOpacity> */}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 15
  },
  title: {
    paddingBottom: 15,
    fontSize: titleFontSize,
    fontFamily: boldFontFamily,
    color: primaryColor,
    textAlign: "center",
    borderBottomColor: lightGreyColor,
    borderBottomWidth: 1,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: greyColor,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  btnLabel: {
    color: darkGreyColor,
    fontSize: subtitleFontSize,
    fontFamily: regularFontFamily
  }

})
export default StatsComponent;