import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { whiteColor, greyColor, lightGreyColor, darkGreyColor, primaryColor, regularFontFamily, paragraphFontSize } from "../helpers/styleGuidelines";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Contact extends Component {
  /***Composant FOOTER connecter au screen (HomeScreen) & re-utilisable comme le HEADER dans les autres composants*/
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
              <Text style={styles.titleText}>A propos</Text> 
            <Text style={styles.titleText}>Exchange ?</Text>
            <Text style={styles.textStyle}>
              Un lieu d'échange convivial où toutes questions trouvera une
              réponse
            </Text>
            <Text style={styles.textStyle}>
              Apprentissage de la pédagogie de l'entraide.
            </Text>
            <Text style={styles.textStyle}>
              Savoir questionner pour obtenir des réponses pertinentes
            </Text>
          </View>

          <View>
            <Text style={styles.titleText}>Intéret ?</Text>
            <Text style={styles.textStyle}>
              Créer en tant que projet back office pour la fabrique de Roanne,
            </Text>
            <Text style={styles.textStyle}>
              et outil à vocation pédagogique a pour objectif,
            </Text>
            <Text style={styles.textStyle}>
              de servir de lieu d'échange entre tous simploniens de toutes
              promotions.
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
            <Text style={styles.CopyrightItems}>By Simplon-Vénissieux</Text>
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
    backgroundColor: greyColor,
    padding: 30,
    width: wp('100%'),
    height: hp('80%'),
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-around' 
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
    padding: 20,
    width: wp('100%'),
    height: hp('20%'),
  },
  CopyrightItems: {
    fontSize: 12,
    color: "#007BFF",
    textAlign: "center"
  },

  titleText: {
    fontSize: 24,
    fontFamily: regularFontFamily,
    color: primaryColor,
    paddingBottom: 8
    //justifyContent: "space-evenly"
  },

  textStyle: {
    color: whiteColor,
    fontSize: paragraphFontSize,
    fontFamily: regularFontFamily,
    paddingBottom: 20
  }
});

export default Contact;
