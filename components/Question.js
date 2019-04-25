import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

class Question extends Component {
  render() {
    const { question } = this.props;

    return (
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
                fontWeight: "bold",
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
                style={{ fontSize: 16, color: "#6C757D", fontStyle: "italic" }}
              >
                {question.date}
              </Text>
              <Text
                style={{ fontSize: 16, color: "#6C757D", paddingHorizontal: 8 }}
              >
                par
              </Text>
              <Text style={{ fontSize: 16, color: "#6C757D" }}>
                {question.author}
              </Text>
            </View>

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
                <Icon name="comment" type="font-awesome" color="#171b22" />
                <Text style={{ marginLeft: 8, color: "#171b22" }}>
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
                <Text style={{ color: "#fff" }}>{question.factory}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="tag"
                  type="font-awesome"
                  color="#171b22"
                />
                <Text style={{ marginLeft: 8, color: "#171b22" }}>
                  {question.tag}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

export default Question;
