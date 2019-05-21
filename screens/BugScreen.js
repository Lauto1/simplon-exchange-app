import React from "react";
import { StyleSheet, View } from "react-native";
import BugReportComponent from "../components/BugReportComponent";
import HeaderComponent from "../components/layouts/HeaderComponent";

class BugScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <BugReportComponent />
      </View>
    );
  }
}

export default BugScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
