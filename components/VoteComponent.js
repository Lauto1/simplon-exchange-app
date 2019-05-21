/**
 * -Composant à relier au container lié au post "questions/réponses"
 */
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {blackColor, lightGreyColor, whiteColor} from "../helpers/styleGuidelines"

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote_score: 0,
      voted: false
    };
  }
  isLoged = false; // à remplacer par verificatin de login
  /**
   * Infos :
   * - Procédure d'incrementation ou de décrémentation du compteur de votes
   * @var String type : correspond au symbole de l'opération attendue, soit "+" ou "-"
   */
  handleVote(type) {
    // if condition checks if ( user is logged ? )
    if (this.isLoged) {
      if (type == '+') {
        this.setState({ vote_score: this.state.vote_score + 1 });
        //call action upvote
      } else if (type == '-') {
        this.setState({ vote_score: this.state.vote_score - 1 });
        //call action downvote
      }
    } else {
      this.props.navigation.navigate("Login");
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleVote("+");
          }}
        >
          <Text style={styles.arrow}>▲</Text>
        </TouchableOpacity>
        <View style={styles.count_container}>
          <Text style={styles.count}>{this.state.vote_score}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleVote("-");
          }}
        >
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  count_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: lightGreyColor,
    width: 30,
    height: 30,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 4
  },
  arrow: {
    color: whiteColor,
    textAlign: "center"
  },
  button: {
    backgroundColor: blackColor,
    textAlign: "center",
    width: 30,
    height: 30,
    borderRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Vote;
