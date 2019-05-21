import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as faq from "../mock/faq.json";
import {lightGreyColor, primaryColor, whiteColor, darkGreyColor, blackColor} from "../helpers/styleGuidelines"

class FaqComponent extends React.Component {
  //permet de maper chaque question/reponse
  Faq() {
    return faq.faq.map(function(r, i) {
      return (
        <View style={styles.cart} key={i}>
          <View style={styles.questionView}>
            <Text style={styles.question}>{r.question}</Text>
          </View>
          <Text style={styles.answer}>{r.answer}</Text>
        </View>
      );
    });
  }

  //affiche chaque question/reponse
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Foire aux questions</Text>
        </View>
        {this.Faq()}
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
