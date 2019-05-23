import React, { Component } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { primaryColor, lightGreyColor, blackColor, secondaryTextColor, boldFontFamily, whiteColor, titleFontSize, paragraphFontSize, regularFontFamily, subtitleFontSize } from "../helpers/styleGuidelines";
import { toggleLoader } from "../actions/loader";
import Loader from "./Loader";


class QuestionComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaderDisplayed: false
    }
  }
  showLoader = () => { this.setState({ showLoader: true }); };
  hideLoader = () => { this.setState({ showLoader: false }); };

  onPressQuestion() {
    console.log("onPressQuestion");
    const { navigation: navigate } = this.props;
    this.props.isLoaderDisplayed = true;
    () => navigate("Question");
  }
  //test hightlight word "not 100% functionnal"
  hightlightTerm(title = null, terms = null) {
    let testHiglight = false;
    if (testHiglight && terms != null && terms != "" && title.toLowerCase().includes(terms.toLowerCase()) && terms.length >= 2) {

      let indexWord = title.toLowerCase().indexOf(terms.toLowerCase());
      console.log("TCL: indexWord", indexWord)
      let beginningWords = title.slice(0, indexWord);
      let originalWord;
      let words = title.split(" ");
      console.log("TCL: words", words)
      words.forEach(word => {
        if (word.toLowerCase() === terms.toLowerCase() || word.toLowerCase().includes(terms.toLowerCase())) {
          originalWord = word;
        }
      })
      console.log("TCL: originalWord", originalWord);

      let lastWords = title.slice(indexWord + originalWord.length, title.length);
      return <Text style={styles.titleContainer} >{beginningWords}<Text style={{ backgroundColor: "#FFFF00" }} >{originalWord}</Text><Text>{lastWords}</Text></Text>
    } else {
      return <Text style={styles.titleContainer}>{title}</Text>
    }
  }
  render() {
    const { question } = this.props;
    const { terms } = this.props
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Question", { question: question })
        }>

        <Card onPress={() => toggleLoader()} containerStyle={{ borderRadius: 3, margin: 8, padding: 0 }}>
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
