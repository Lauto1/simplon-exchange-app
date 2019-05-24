import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {CheckBox} from 'react-native-elements';
import { primaryColor } from "../../helpers/styleGuidelines";

import DateTimePickerTester from "../../containers/DatePicker";

// Mise en place des states liées au component PopUp
 class PopUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            defaultAnimationDialog: false,
            refreshing: false,
            NbPosts: 0,
            NbUsers: 0,
            NbResponses: 0,
            checkedNbPosts: false,
            checkedNbUsers: false,
            checkedNbResponses: false,
        }}
        fetchDataChecked = () => {
            console.log('test zaim')
            let checkedData = {'NbPosts':false,'NbUsers':false, 'NbResponses':false }; 
            let datefilter ={'StartDate':null, 'EndDate':null};
            let datafilter =[];
            if (this.state.checkedNbPosts === true) {
              checkedData.NbPosts= true
            }        
            if (this.state.checkedNbUsers === true) {
              checkedData.NbUsers= true
            }        
            if (this.state.checkedNbResponses === true) {
              checkedData.NbResponses= true
            }
            datafilter.push(checkedData);
            datefilter.StartDate= this.props.StartDateFilter;
            datefilter.EndDate = this.props.EndDateFilter;

            datafilter.push(datefilter);

            console.log(datafilter)
            // console.log(this.props)

            this.props.actions.fetchDataApi(datafilter)
            
          };          
// Afichage de la PopUp et création du bouton
    render() {
        return (

                <View>         
                    <DateTimePickerTester 
                    />
                    <View>

        {/*
        // Les checkboxs qui permettent d'afficher les statistiques en fonction du type de donnée demander
        */}
          <CheckBox
            title="Trier par post"
            checked={this.state.checkedNbPosts}
            onPress={() =>
              this.setState({ checkedNbPosts: !this.state.checkedNbPosts })
            }
          />
          <CheckBox
            title="Trier par utilisateur"
            checked={this.state.checkedNbUsers}
            onPress={() =>
              this.setState({ checkedNbUsers: !this.state.checkedNbUsers })
            }
          />

          <CheckBox
            title="Trier par reponse"
            checked={this.state.checkedNbResponses}
            onPress={() =>
              this.setState({
                checkedNbResponses: !this.state.checkedNbResponses
              })
            }
          />
        </View>
        <View style={styles.buttonStyle}>
            <Button
              onPress={this.fetchDataChecked}
              title="Rechercher"
              color="#2F3239"
            />
          </View>
      </View>
    );
  }
}
export default PopUp;


const styles = StyleSheet.create({
    container: { marginTop: 20 },
    buttonStyle: {
      backgroundColor: '#2F3239',
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'center',
      borderRadius: 5,
      // width: 150,
      padding: 8,
      margin: 20
    }
  });
