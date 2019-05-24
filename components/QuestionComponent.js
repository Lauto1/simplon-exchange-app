import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import {
  titleFontSize,
  boldFontFamily,
  primaryColor,
  secondaryTextColor,
  regularFontFamily,
  subtitleFontSize,
  paragraphFontSize,
  lightGreyColor,
  blackColor,
  whiteColor
} from "../helpers/styleGuidelines";
import Vote from "./VoteComponent";

class QuestionComponent extends Component {

  onPressQuestion() {
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
            <View
              style={{
                justifyContent: "center",
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              <Vote navigation={this.props.navigation} />
            </View>

            <View style={{ flex: 1, padding: 15 }}>
              <Text
                style={{
                  paddingBottom: 15,
                  fontSize: titleFontSize,
                  fontFamily: boldFontFamily,
                  color: primaryColor
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
                    color: secondaryTextColor,
                    fontFamily: regularFontFamily,
                    fontStyle: "italic"
                  }}
                >
                  {question.date}
                </Text>
                <Text
                  style={{
                    fontSize: subtitleFontSize,
                    fontFamily: regularFontFamily,
                    color: secondaryTextColor,
                    paddingHorizontal: 8
                  }}
                >
                  par
                </Text>
                <Text
                  style={{
                    fontSize: subtitleFontSize,
                    fontFamily: regularFontFamily,
                    color: secondaryTextColor
                  }}
                >
                  {question.author}
                </Text>
              </View>
              {this.props.showContent && (
                <Text
                  style={{
                    paddingBottom: 15,
                    fontSize: paragraphFontSize,
                    fontFamily: regularFontFamily,
                    borderTopColor: lightGreyColor,
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
                  borderTopColor: lightGreyColor,
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
                    color={blackColor}
                  />
                  <Text
                    style={{
                      marginLeft: 8,
                      color: blackColor,
                      fontFamily: regularFontFamily
                    }}
                  >
                    {question.answers.length}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    backgroundColor: primaryColor,
                    borderRadius: 3,
                    paddingHorizontal: 5
                  }}
                >
                  <Text
                    style={{ color: whiteColor, fontFamily: regularFontFamily }}
                  >
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
                    color={blackColor}
                  />
                  <Text
                    style={{
                      marginLeft: 8,
                      color: blackColor,
                      fontFamily: regularFontFamily,
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
