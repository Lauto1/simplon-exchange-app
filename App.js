import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/titleDescription/Title.component';
import Description from './components/titleDescription/Description.component';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title title=" Statistique" />
        <Description description=" Dans cette page touvez des statistique sur les nombre d'utilisateur, nombre de postes, et nombre de réponses" />
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
