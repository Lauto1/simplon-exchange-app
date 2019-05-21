import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import Vote from "./VoteComponent";
class AnwserComponent extends Component {
  render() {
    const { answer } = this.props;
    return (
      <View style={styles.view}>
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
              <Vote/>
            </View>

            <View style={{ flex: 1, padding: 15 }}>
              <View
                style={{
                  flexDirection: "column",
                  paddingBottom: 8
                }}
              >
                <Text style={{ fontSize: 16, fontFamily: "firacodebold" }}>
                  {answer.author}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "firacode",
                    color: "#6C757D"
                  }}
                >
                  karma : {answer.points}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    color: "#6C757D",
                    fontFamily: "firacode",
                    fontStyle: "italic"
                  }}
                >
                  {answer.date}
                </Text>
              </View>
              <Text
                style={{
                  paddingBottom: 15,
                  fontSize: 16,
                  fontFamily: "firacode",
                  borderTopColor: "#dedede",
                  borderTopWidth: 1,
                  paddingTop: 28,
                  marginTop: 8
                }}
              >
                {answer.content}
              </Text>

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
              />
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  view: {
    flex: 1,
    backgroundColor: "#dee2e6"
  },
  search: {
    marginTop: 20
  }
});

export default AnwserComponent;
