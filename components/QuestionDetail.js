import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import Headernav from "../components/layouts/header";

class QuestionDetail extends Component {
  render() {

    const {question} = this.props
    console.log(this.props);
    

    return (
      <View style={styles.view}>
        <Headernav drawerNav={this.props.navigation} title="Question"/>
        <Card>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {question.upvote}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginBottom: 10,
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
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ fontSize: 16 }}>{question.date}</Text>
                <Text style={{ fontSize: 16 }}>{question.author}</Text>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <Icon name="tag" type="font-awesome" />
                  <Text style={{ marginLeft: 8 }}>{question.tag}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <Icon name="comment" type="font-awesome" />
                  <Text style={{ marginLeft: 8 }}>{question.answers.length}</Text>
                </View>
              </View>
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

export default QuestionDetail;
