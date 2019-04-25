import React from 'react';
import { StyleSheet, View } from 'react-native';
import Formulaire from './components/Formulaire';
export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Formulaire/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
