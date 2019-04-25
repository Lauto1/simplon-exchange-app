import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";

class Question extends Component {


  constructor(props){
    super(props);
  }

  onPressQuestion() {
    console.log('onPressQuestion');
    
    const { navigation:navigate } = this.props;
    () => navigate('Question')
  }
  render() {
    const { question } = this.props;
    //  const {navigate} = this.props.navigation;
    

    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Question',{question: question})}>
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
      </TouchableOpacity>
    );
  }
}

export default Question;
