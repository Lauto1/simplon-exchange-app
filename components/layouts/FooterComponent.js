import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
// import DropdownMenu from 'react-native-dropdown-menu';
import { primaryColor, lightGreyColor,boldFontFamily,whiteColor,titleFontSize,paragraphFontSize,regularFontFamily,lightGreyColor,greyColor,darkGreyColor } from "../helpers/styleGuidelines";


class Anchor extends React.Component {
  /**Faire un link pour le mailto */
  _handlePress = () => {
    console.log("Link clicked for " + this.props.href);
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity
        style={{ borderRadius: 5 }}
        onPress={() => console.log("By Simplon-Vénissieux")}
      >
         <Text style={styles.titleMailto} title={this.props.title} onPress={this._handlePress}>By Simplon-Vénissieux</Text>
      </TouchableOpacity>
    );
  }
};

class FooterComponent extends Component {

  /**Faire un dropdown menu pour les elements du footer */
    constructor(props) {
      super(props);
      this.state = {
        text: ''
      };
    }

  /***Composant FOOTER connecter au screen (HomeScreen) & re-utilisable comme le HEADER dans les autres composants*/
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>

              <View>
                <Text style={styles.titleText}>Exchange ?</Text>
                <Text style={styles.textStyle}>
                  Un lieu d'échange convivial où toutes questions trouvera une
                  réponse. Apprentissage de la pédagogie de l'entraide. Savoir
                  questionner pour obtenir des réponses pertinentes.
                </Text>
              </View>

              <View>
                <Text style={styles.titleText}>Liens utiles</Text>
                <View
                  style={{
                    flexDirection: "column"
                  }}
                >
                  <TouchableOpacity
                    style={{ borderRadius: 5 }}
                    onPress={() => this.props.drawerNav.navigate("Home")}
                  >
                    <Text style={styles.textStyle}>Accueil</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ borderRadius: 5 }}
                    onPress={() => console.log("poser une question route")}
                  >
                    <Text style={styles.textStyle}>Poser une question</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ borderRadius: 5 }}
                    onPress={() => console.log("aider la communauté route")}
                  >
                    <Text style={styles.textStyle}>Aider la communauté</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ borderRadius: 5 }}
                    onPress={( ) => this.props.drawerNav.navigate("Faq")}
                  >
                    <Text style={styles.textStyle}>Foire Aux Questions</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.titleText}>Intéret ?</Text>
                <Text style={styles.textStyle}>
                  Créer en tant que projet back office pour la fabrique de Roanne,
                  et outil à vocation pédagogique a pour objectif, de servir de lieu
                  d'échange entre tous simploniens de toutes promotions.
                </Text>
              </View>
          </View>     

          <View style={styles.Copyright}>
            <Text style={{ color: whiteColor, paddingBottom: 8 }}>
              Copyright 2019 Une Question ? |
            </Text>
            <TouchableOpacity
              style={{ width: "90%", borderRadius: 5 }}
              onPress={() => console.log("mail to")}
            >
              <Anchor style={styles.CopyrightItems} href="mailto://contact@idmkr.io" title="By Simplon-Vénissieux" />
            </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 3,
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: greyColor,
    width: "100%",
    padding: 30,
    marginTop: 60
  },

  View: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    backgroundColor: lightGreyColor
  },
  Copyright: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkGreyColor,
    padding: 20
  },
  CopyrightItems: {
    fontSize: 12,
    color: "#007BFF",
    textAlign: "center"
  },

  titleText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: regularFontFamily,
    color: "#d6363e",
    paddingBottom: 8
    //justifyContent: "space-evenly"
  },

  textStyle: {
    color: whiteColor,
    textAlign: "center",
    fontSize: paragraphFontSize,
    fontFamily: regularFontFamily
  },
  titleMailto: {
    color: "#0056b3",
    textAlign: "center",
  }
});

export default FooterComponent;
