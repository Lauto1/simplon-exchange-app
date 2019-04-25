import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import {Provider} from 'react-redux';
import Statistique from './components/Statistique'
import store from "./store";
=======
import Title from './components/titleDescription/Title.component';
import Description from './components/titleDescription/Description.component';

>>>>>>> Title and Description
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        
          <Provider store={store}>
            <Statistique/>
          </Provider>
        
=======
        <Title title=" Statistique" />
        <Description description=" Dans cette page touvez des statistique sur les nombre d'utilisateur, nombre de postes, et nombre de réponses" />
>>>>>>> Title and Description
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
