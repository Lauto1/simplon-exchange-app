import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import Dialog, { DialogButton, DialogContent, DialogTitle } from "react-native-popup-dialog";
import { greyColor, whiteColor, boldFontFamily, paragraphFontSize } from "../../helpers/styleGuidelines";
import Filter from "./Filter";

// Mise en place des states liées au component PopUp
class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultAnimationDialog: false,
      refreshing: false,
      NbPosts: 0,
      NbUsers: 0,
      NbResponses: 0,
      checkedNbPosts: false,
      checkedNbUsers: false,
      checkedNbResponses: false
    };
  }
  fetchDataChecked = () => {
    let checkedData = [];

    if (this.state.checkedNbPosts === true) {
      checkedData.push("NbPosts");
    }
    if (this.state.checkedNbUsers === true) {
      checkedData.push("NbUsers");
    }
    if (this.state.checkedNbResponses === true) {
      checkedData.push("NbResponses");
    }

    this.props.actions.fetchDataApi(checkedData);
  };
  // Afichage de la PopUp et création du bouton
  render() {
    return (
      <View>
        <View style={styles.buttonStyle}>
          <Button
            color={greyColor}
            titleStyle={{ fontFamily: boldFontFamily }}
            title="Trier par date"
            onPress={() => {
              this.setState({
                defaultAnimationDialog: true
              });
            }}
          />
        </View>

        {/* Contenu de la PopUp */}
        <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          height={700}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
        >
          <DialogTitle
            title="Sélectionner des date debut et fin "
            hasTitleBar={false}
            align="left"
          />
          <DialogContent>
            <Filter />
            <View style={{ flex: 1, flexDirection: "row" }}>
              {/* // Mise en place des 2 boutons */}
              <DialogButton
                text="Supprimer"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="Enregistrer"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-2"
              />
            </View>
          </DialogContent>
        </Dialog>
        {/*
        // Les checkboxs qui permet d'afficher les statistiques en fonction du type de donnée demander
        */}
        <View style={styles.checkBox}>
          <CheckBox
            fontFamily={boldFontFamily}
            title="Trier par post"
            checked={this.state.checkedNbPosts}
            onPress={() =>
              this.setState({ checkedNbPosts: !this.state.checkedNbPosts })
            }
          />
          <CheckBox style={styles.checkBox}
            title="Trier par utilisateur"
            checked={this.state.checkedNbUsers}
            onPress={() =>
              this.setState({ checkedNbUsers: !this.state.checkedNbUsers })
            }
          />

          <CheckBox style={styles.checkBox}
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
            color={greyColor}
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
    color: whiteColor,
    fontFamily: boldFontFamily,
    fontSize: paragraphFontSize,
    textAlign: 'center',
    borderRadius: 5,
    padding: 8,
    margin: 20
  },
  checkBox: {
    color: whiteColor,
    fontFamily: boldFontFamily,
    fontSize: paragraphFontSize,
    textAlign: 'center',

  },

});