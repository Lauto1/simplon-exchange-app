import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import FooterComponent from "./layouts/FooterComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import {
  primaryColor,
  greyColor,
  lightGreyColor,
  whiteColor,
  primaryTextColor,
  boldFontFamily,
  regularFontFamily,
  paragraphFontSize,
  titleFontSize
} from "../helpers/styleGuidelines";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Paul',
      fabric: 'Venissieux',
      mail: 'user@mail.com',
      nb_questions: 12,
      nb_answers: 35,
      nb_valid_answers: 35,
      nb_karma: 123
    };
  }

  render() {
    console.log(this.props.action);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.header, styles.cart]}>
            <View>
                style={styles.avatar}
                source={require('../assets/logo72.png')}
              />
            </View>
            <View style={styles.userData}>
              <Text style={styles.text}>{this.state.userName}</Text>
              <Text style={styles.text}>{this.state.fabric}</Text>
            </View>
          </View>
          <View style={[styles.informations, styles.cart]}>
            <View style={styles.cartitle}>
              <Text style={styles.h2}>Mon profil</Text>
            </View>
            <Text style={styles.text}>Mail : {this.state.mail}</Text>
            <TouchableOpacity
              style={styles.buttonPwd}
              onPress={() => {}}
            >
              <Text style={styles.btnText}>Changer de mot de passe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {this.props.getProfile}}
            >
              <Text style={styles.btnText}>Mettre à jour</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.statistics, styles.cart]}>
            <View style={styles.cartitle}>
              <Text style={styles.h2}>Mes stats</Text>
            </View>
            <View style={styles.inLine}>
              <Text style={styles.text}>Nombres de questions :</Text>
              <Text style={styles.number}>{this.state.nb_questions}</Text>
            </View>
            <View style={styles.inLine}>
              <Text style={styles.text}>Nombres de réponses :</Text>
              <Text style={styles.number}>{this.state.nb_answers}</Text>
            </View>
            <View style={styles.inLine}>
              <Text style={styles.text}>Nombres de réponses validées :</Text>
              <Text style={styles.number}>{this.state.nb_valid_answers}</Text>
            </View>
            <View style={styles.inLine}>
              <Text style={styles.text}>Points Karma :</Text>
              <Text style={styles.number}>{this.state.nb_karma}</Text>
            </View>
          </View>
        </View>
        <FooterComponent />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: lightGreyColor,
  },
  cart: {
    backgroundColor: whiteColor,
    padding: 12,
    borderRadius: 3,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    margin: 3
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userData: {
    paddingHorizontal: 24,
    paddingVertical: 12
  },
  informations: {
    margin: 5
  },
  buttonPwd: {
    backgroundColor: greyColor,
    textAlign: "center",
    width: '100%',
    height: 34,
    borderRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
  },
  button: {
    backgroundColor: primaryColor,
    textAlign: "center",
    width: '100%',
    height: 34,
    borderRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12
  },
  btnText: {
    color: whiteColor
  },
  statistics: {
    margin: 5
  },
  inLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth : 1,
    borderBottomColor: lightGreyColor,
    marginBottom: 12,
    paddingBottom: 12
  },
  cartitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth : 1,
    borderBottomColor: lightGreyColor,
    marginBottom: 12,
  },
  h2: {
    fontSize: titleFontSize,
    fontFamily: boldFontFamily,
    color: primaryTextColor,
    paddingBottom: 12
  },
  text: {
    fontSize: paragraphFontSize,
    fontFamily: regularFontFamily
  },
  number: {
    color: primaryTextColor,
    fontFamily: regularFontFamily
  }
});

export default Profil;