import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HomeContainer from "../containers/HomeContainer";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello world"
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
    return <HomeContainer drawerNav={this.props.navigation} />;
  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

export default HomeScreen;
