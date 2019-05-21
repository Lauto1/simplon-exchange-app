import React, { Component } from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { primaryColor, lightGreyColor, boldFontFamily, whiteColor, titleFontSize, paragraphFontSize, regularFontFamily } from "../helpers/styleGuidelines";

class QuestionComponent extends Component {



  onPressQuestion() {
    console.log("onPressQuestion");

    const { navigation: navigate } = this.props;
    () => navigate("Question");
  }
  //test hightlight word "not 100% functionnal"
  hightlightTerm(title = null, terms = null) {
    let testHiglight = false;
    if ( testHiglight && terms != null && terms != "" && title.toLowerCase().includes(terms.toLowerCase()) &&terms.length >=2) {

      let indexWord = title.toLowerCase().indexOf(terms.toLowerCase());
			console.log("TCL: indexWord", indexWord)
      let beginningWords = title.slice(0, indexWord);
      let originalWord;
      let words = title.split(" ");
			console.log("TCL: words", words)
      words.forEach(word=>{
          if (word.toLowerCase()=== terms.toLowerCase() || word.toLowerCase().includes(terms.toLowerCase()) ) {
              originalWord = word;
          }
      })
			console.log("TCL: originalWord", originalWord);
      
      let lastWords = title.slice(indexWord + originalWord.length, title.length);
      return <Text style={styles.titleContainer} >{ beginningWords }<Text style={{ backgroundColor: "#FFFF00" }} >{ originalWord }</Text><Text>{ lastWords }</Text></Text>
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
        }
      >
        <Card containerStyle={{ borderRadius: 3, margin: 8, padding: 0 }}>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View
              style={{
                backgroundColor: "#f3f3f3",
                justifyContent: "center",
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              <Icon name="sort-up" type="font-awesome" />
              <Text style={{ fontSize: 20 }}>{question.upvote}</Text>
            </View>

            <View style={{ flex: 1, padding: 15 }}>
              {this.hightlightTerm(question.title,terms)}

              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 8
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#6C757D",
                    fontFamily: "firacode",
                    fontStyle: "italic"
                  }}
                >
                  {question.date}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "firacode",
                    color: "#6C757D",
                    paddingHorizontal: 8
                  }}
                >
                  par
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "firacode",
                    color: "#6C757D"
                  }}
                >
                  {question.author}
                </Text>
              </View>
              {this.props.showContent && (
                <Text
                  style={{
                    paddingBottom: 15,
                    fontSize: 14,
                    fontFamily: "firacode",
                    borderTopColor: "#dedede",
                    borderTopWidth: 1,
                    paddingTop: 28,
                    marginTop: 8
                  }}
                >
                  {question.content}
                </Text>
              )}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderTopColor: "#dedede",
                  borderTopWidth: 1,
                  paddingTop: 8,
                  marginTop: 8
                }}
              >
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                  <Icon
                    size={18}
                    name="comment"
                    type="font-awesome"
                    color="#171b22"
                  />
                  <Text
                    style={{
                      marginLeft: 8,
                      color: "#171b22",
                      fontFamily: "firacode"
                    }}
                  >
                    {question.answers.length}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    backgroundColor: "#D6363E",
                    borderRadius: 3,
                    paddingHorizontal: 5
                  }}
                >
                  <Text style={{ color: "#fff", fontFamily: "firacode" }}>
                    {question.factory}
                  </Text>
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
                  <Text
                    style={{
                      marginLeft: 8,
                      color: "#171b22",
                      fontFamily: "firacode",
                      textAlignVertical: "center",
                      lineHeight: 15
                    }}
                  >
                    {question.tag}
                  </Text>
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
   titleContainer: {
    paddingBottom: 15,
    fontSize: 20,
    fontFamily: boldFontFamily,
    color: "#d6363e"
  }
})
export default QuestionComponent;
