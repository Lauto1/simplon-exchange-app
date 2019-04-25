import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import QuestionDetail from "../components/QuestionDetail";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello QuestionScreen"
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
   const question= this.props.navigation.getParam("question","no Data")

    
    return <QuestionDetail navigation={this.props.navigation} question={question}/>;
  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

export default QuestionScreen;
