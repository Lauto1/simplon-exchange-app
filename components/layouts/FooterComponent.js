import React, { Component } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Linking,
  View,
  Text,
  StyleSheet
} from "react-native";

class FooterComponent extends Component {
  /***Composant FOOTER connecter au screen (HomeScreen) & re-utilisable comme le HEADER dans les autres composants*/

  /**Dans les TouchableOpacity se trouve les Liens de connexion avec la barre de navigation du menu HEADER */
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View>
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
            <Text style={styles.titleText}>Liens utiles</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              <TouchableOpacity
                style={{ borderRadius: 5 }}
                onPress={() => console.log("Accueil route")
                 }
              >
                <Text style={styles.textStyle}>Accueil / </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ borderRadius: 5 }}
                onPress={() => console.log("poser une question route")}
              >
                <Text style={styles.textStyle}>Poser une question / </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ borderRadius: 5 }}
                onPress={() => console.log("aider la communauté route")}
              >
                <Text style={styles.textStyle}>Aider la communauté / </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ borderRadius: 5 }}
                onPress={() => console.log("foire au questions route")}
              >
                <Text style={styles.textStyle}>Foire Aux Questions</Text>
              </TouchableOpacity>
            </View>
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
          <Text style={{ color: "#fff", paddingBottom: 8 }}>
            Copyright 2019 Une Question ? |
          </Text>
          <TouchableOpacity
            style={{ width: "90%", borderRadius: 5 }}
            onPress={() => this.props.navigation.navigate("HomeScreen")}
          >
            <Text style={styles.CopyrightItems}>By Simplon-Vénissieux</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
/**Ci-dessus dans le TouchableOpacity 'By Simplon-Vénissieux' lien de contact mailto  'MailComposer' pour contacter les différents centres des différentes villes */

const styles = StyleSheet.create({
  wrapper: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "#2f3239",
    width: "100%",
    padding: 30,
    marginTop: 60
  },

  View: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    backgroundColor: "#dee2e6"
  },
  Copyright: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222429",
    padding: 20
  },
  CopyrightItems: {
    fontSize: 12,
    color: "#007BFF",
    textAlign: "center"
  },

  titleText: {
    fontSize: 24,
    fontFamily: "firacode",
    color: "#d6363e",
    paddingBottom: 8
  },

  textStyle: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "firacode",
    paddingBottom: 20
  }
});

export default FooterComponent;
