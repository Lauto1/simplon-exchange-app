import React, { Component } from "react";
import { Font } from "expo";
import { StyleSheet, Text } from "react-native";
import Navigator from "./navigation/navigator";
import { Provider } from "react-redux";
import store from "./store";
import { Amplitude } from "expo";
import { analyticsAPIKey } from "./example.config";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      AppLoading: true
    };
    Amplitude.initialize(analyticsAPIKey);
  }


  async componentWillMount() {
    await Font.loadAsync({
      firacode: require("./assets/fonts/firacoderegular.ttf"),
      firacodebold: require("./assets/fonts/firacodebold.ttf")
    });
    this.setState({ AppLoading: false });
  }
  render() {
    if (this.state.AppLoading) {
      return <Text>Loading....</Text>;
    } else {
      return (
        <Provider store={store}>
          <Navigator />
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
