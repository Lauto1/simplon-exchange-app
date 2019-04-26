import React, {Component} from 'react';
import {View, Button, StyleSheet, Platform, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

class filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      NbPosts: 0,
      NbUsers: 0,
      NbResponses: 0,
      checkedNbPosts: false,
      checkedNbUsers: false,
      checkedNbResponses: false,
    }
  }


  // récupere les données demander a l'api en fonction de son type (nombre de user, reponse, post)
  fetchDataChecked = () => {

    let checkedData = [];

    if (this.checkedNbPosts === true) {
      checkedData.push(this.checkedNbPosts)
    }

    if (this.checkedNbUsers === true) {
      checkedData.push(this.checkedNbUsers)
    }

    if (this.checkedNbResponses === true) {
      checkedData.push(this.checkedNbResponses)
    }

    this.props.actions.fetchDataApi(checkedData)
  };

  render() {

    return (

      <View>

        {/*
        // Les checkboxs qui permet d'afficher les statistiques en fonction du type de donnée demander
        */}
        <CheckBox
          title='Trier par post'
          checked={this.state.checkedNbPosts}
          onPress={() => this.setState({checkedNbPosts: !this.state.checkedNbPosts})}
        />

        <CheckBox
          title='Trier par utilisateur'
          checked={this.state.checkedNbUsers}
          onPress={() => this.setState({checkedNbUsers: !this.state.checkedNbUsers})}
        />

        <CheckBox
          title='Trier par reponse'
          checked={this.state.checkedNbResponses}
          onPress={() => this.setState({checkedNbResponses: !this.state.checkedNbResponses})}
        />

        <Button
          onPress={this.fetchDataChecked}
          title="Rechercher"
          color="#841584"
        />
      </View>
    )
  }
}

export default filter;
