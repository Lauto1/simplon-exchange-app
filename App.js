import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./navigation/navigator";
import { Provider } from "react-redux";
import { Font, AppLoading } from 'expo';
import store from "./store";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      AppLoading: true
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'firacode': require("./assets/fonts/firacoderegular.ttf"),
      'firacodebold': require("./assets/fonts/firacodebold.ttf")
    });
    this.setState({ AppLoading: false });
  }

  render() {
    if (this.state.AppLoading) {
      return (
        <Text>Loading....</Text>
      )
    } else {
      return (
        <Provider store={store}>
          <Navigator />
        </Provider>
      );
    };
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
