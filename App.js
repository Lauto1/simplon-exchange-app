import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Statistique from './components/Statistique';
import store from './store';
import Title from './components/titleDescription/Title';
import Description from './components/titleDescription/Description';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Statistique />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
