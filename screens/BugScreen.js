import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BugReportComponent from "../components/BugReportComponent";
import HeaderComponent from "../components/layouts/HeaderComponent";
import { whiteColor } from "../helpers/styleGuidelines";

class BugScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: props => <HeaderComponent {...props} />
  });

  render() {
    return (
      <View style={styles.container}>
        <BugReportComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default BugScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: "center",
    justifyContent: "center"
  }
});
