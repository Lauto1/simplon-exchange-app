import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {faq} from "../mock/faq.js";
import { lightGreyColor, primaryColor, whiteColor, darkGreyColor, blackColor } from "../helpers/styleGuidelines"
import Accordion from 'react-native-collapsible/Accordion'

const section = faq;

class FaqComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: true,
      activeSections: [],
      updateSections: ''
    }
  }

  toggle() {
    return this.setState({
      isCollapsed: !isCollapsed
    })
  }

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  _renderHeader = section => {
      return (
        <View style={styles.questionView}>
          <Text style={styles.question}>{section.question}</Text>
        </View>
      )
    }

  _renderContent = section => {
      return (
        <Text style={styles.answer}>{section.answer}</Text>
      )
  }



  //permet de maper chaque question/reponse
  Faq(state) {
    return (
      <View style={styles.cart}>
        <Accordion
          sections={section}
          activeSections={state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }


  //affiche chaque question/reponse
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Foire aux questions</Text>
        </View>
        {this.Faq(this.state)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGreyColor,
    paddingLeft: 24,
    paddingRight: 24
  },
  titleView: {
    padding: 24,
    paddingTop: 40,
    marginBottom: 8,
    borderBottomColor: "#e99599",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 22,
    fontWeight: "400",
    color: primaryColor,
    textAlign: "center"
  },
  cart: {
    backgroundColor: whiteColor,
    marginVertical: 8,
    borderRadius: 4,
    shadowColor: blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  questionView: {
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomColor: lightGreyColor,
    borderBottomWidth: 1
  },
  question: {
    color: primaryColor,
    textAlign: "justify",
    fontWeight: "700",
    fontSize: 16
  },
  answer: {
    color: darkGreyColor,
    paddingVertical: 16,
    paddingHorizontal: 8
  }
});

export default FaqComponent;
