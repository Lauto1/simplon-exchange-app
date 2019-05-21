import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import {
  paragraphFontSize,
  boldFontFamily,
  darkGreyColor,
  greyColor,
  whiteColor,
  lightGreyColor,
  primaryColor,
  secondaryTextColor,
  regularFontFamily,
  subtitleFontSize,
  titleFontSize,
  blackColor
} from "../helpers/styleGuidelines";

class QuestionComponent extends Component {
  onPressQuestion() {
    console.log("onPressQuestion");

    const { navigation: navigate } = this.props;
    () => navigate("Question");
  }
  render() {
    const { question } = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Question", { question: question })
        }
      >
        <Card containerStyle={{ borderRadius: 3, margin: 8, padding: 0 }}>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View style={styles.view}>
              <Icon name="sort-up" type="font-awesome" />
              <Text style={styles.textUpVote}>{question.upvote}</Text>
            </View>

            <View style={{ flex: 1, padding: 15 }}>
              <Text style={styles.title}>{question.title}</Text>

              <View style={styles.infosPostBox}>
                <Text style={styles.date}>{question.date}</Text>
                <Text style={styles.par}>par</Text>
                <Text style={styles.author}>{question.author}</Text>
              </View>

              {this.props.showContent && (
                <Text style={styles.questionContent}>{question.content}</Text>
              )}

              <View style={styles.boxTags}>
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                  <Icon
                    size={18}
                    name="comment"
                    type="font-awesome"
                    color="#171b22"
                  />
                  <Text style={styles.answerNumber}>
                    {question.answers.length}
                  </Text>
                </View>
                <View style={styles.factoryBox}>
                  <Text style={styles.factoryText}>{question.factory}</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  <Icon
                    size={18}
                    name="tag"
                    type="font-awesome"
                    color="#171b22"
                  />
                  <Text style={styles.tagText}>{question.tag}</Text>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  textUpVote: {
    fontSize: titleFontSize
  },
  title: {
    paddingBottom: 15,
    fontSize: subtitleFontSize,
    fontFamily: boldFontFamily,
    color: primaryColor
  },

  infosPostBox: {
    flexDirection: "row",
    paddingBottom: 8
  },

  date: {
    fontSize: 16,
    color: secondaryTextColor,
    fontFamily: regularFontFamily,
    fontStyle: "italic"
  },

  par: {
    fontSize: subtitleFontSize,
    fontFamily: regularFontFamily,
    color: secondaryTextColor,
    paddingHorizontal: 8
  },

  author: {
    fontSize: subtitleFontSize,
    fontFamily: regularFontFamily,
    color: secondaryTextColor
  },

  questionContent: {
    fontSize: paragraphFontSize,
    fontFamily: regularFontFamily,
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    paddingTop: 28,
    paddingBottom: 15,
    marginTop: 8
  },

  boxTags: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    paddingTop: 8,
    marginTop: 8
  },

  answerNumber: {
    marginLeft: 8,
    color: blackColor,
    fontFamily: regularFontFamily
  },

  factoryBox: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: primaryColor,
    borderRadius: 3,
    paddingHorizontal: 5
  },

  factoryText: {
    color: whiteColor,
    fontFamily: regularFontFamily
  },

  tagText: {
    marginLeft: 8,
    color: blackColor,
    fontFamily: regularFontFamily,
    textAlignVertical: "center",
    lineHeight: 15
  }
});

export default QuestionComponent;
