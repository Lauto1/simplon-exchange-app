import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import QuestionDetail from "../components/QuestionDetail";
import Question from "../components/Question";

import AnwserComponent from "../components/AnwserComponent";
import { Card, Icon } from "react-native-elements";
class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello QuestionScreen"
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Question"
    };
  };

  render() {
    const question = this.props.navigation.getParam("question", "no Data")
    const answers = question.answers

    return (
      <ScrollView contentContainerStyle={{ backgroundColor: "#dee2e6"}} >

        <Question navigation={this.props.navigation} question={question} showContent={true} />
        <Text style={{
          marginTop:10,
          marginBottom: 10,
          marginLeft: 40,
          fontSize: 20,
          fontWeight: "bold",
          color: "#d6363e"
        }}>Réponses</Text>
        {answers.map(answer => (
          <AnwserComponent key={answer.id} answer={answer} />
        ))}


      </ScrollView>
    );
  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

export default QuestionScreen;
