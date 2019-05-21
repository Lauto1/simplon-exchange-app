import React, { Component } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { primaryColor, lightGreyColor, boldFontFamily, whiteColor, titleFontSize, paragraphFontSize, regularFontFamily } from "../helpers/styleGuidelines";


class QuestionComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoader: false
    }
  }
  showLoader = () => { this.setState({ showLoader: true }); };
  hideLoader = () => { this.setState({ showLoader: false }); };

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
        <View style={{ position: 'absolute', top: "35%", right: 0, left: 0 }}>
          <ActivityIndicator size="large" color="#D7403E" />
        </View>
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
              <Text
                style={{
                  paddingBottom: 15,
                  fontSize: 20,
                  fontFamily: boldFontFamily,
                  color: "#d6363e"
                }}
              >
                {question.title}
              </Text>
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
export default QuestionComponent;
