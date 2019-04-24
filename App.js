import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./navigation/navigator";
import { Provider } from "react-redux";
import store from "./store";
import { Amplitude } from "expo";
import { analyticsAPIKey } from "./config";

export default class App extends Component {

  constructor(props) {
    super(props);
    Amplitude.initialize(analyticsAPIKey);
  }
  
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
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
