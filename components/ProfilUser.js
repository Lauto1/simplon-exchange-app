/**
 * -Composant à relier au container lié au post "questions/réponses"
 */
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar = 'PG',
      userName = 'Paul',
      fabric = 'Venissieux',
      mail = 'user@mail.com',
      nb_questions: 0,
      nb_answers: 0,
      nb_valid_answers: 0,
      nb_karma: 0
    };
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            {this.state.avatar}
          </View>
          <View>
            <Text>{this.state.userName}</Text>
            <Text>{this.state.fabric}</Text>
          </View>
        </View>
        <View style={styles.informations}>
          <Text>Mail : {this.state.mail}</Text>
          <TouchableOpacity
            style={styles.buttonPwd}
            onPress={() => {}}
          >
            <Text>Changer de mot de pass</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
          >
            <Text>Mettre à jour</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statistics}>
          <Text>nb questions :</Text>
          <Text>nb réponses :</Text>
          <Text>nb réponses validées :</Text>
          <Text>points karma :</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "lightgrey",
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24
  },
  header: {
    margin: 3
  },
  buttonPwd: {
    backgroundColor: "primaryColor",
    textAlign: "center",
    width: 30,
    height: 30,
    borderRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "black",
    textAlign: "center",
    width: 30,
    height: 30,
    borderRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Profil;
