import React from "react";
import { View, Text } from "react-native";

import Headernav from "../components/layouts/header";

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Headernav drawerNav={this.props.navigation} />
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
