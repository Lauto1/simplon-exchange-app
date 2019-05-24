import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
  Picker
} from "react-native";
import { Card, Icon, Input } from "react-native-elements";
import DraftComponent from "./DraftComponent";
import {
  primaryColor,
  lightGreyColor,
  boldFontFamily,
  titleFontSize,
  whiteColor,
  blackColor,
  secondaryTextColor,
  regularFontFamily,
  paragraphFontSize
} from "../helpers/styleGuidelines";

class QuestionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello world",
      response: "",
      test: "",
      category: "",
      categories: []
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        categories: ["PHP", "MySQL", "NodeJS", "C#", "Python", "Ruby"]
      });
    }, 1000);
  }
  render() {
    return (
      <View style={styles.view}>
        <Card containerStyle={styles.cardStyle}>
          <View style={styles.column}>
            <Text style={styles.titleText}>Posez votre question</Text>

            <View style={styles.infosBox}>
              <Text style={styles.text}>
                La précision et la rapidité de la réponse passe par une question
                correctement posée. Votre titre doit être explicite, votre
                question pas globale mais spécifique.
              </Text>
              <Text />
              <Text style={styles.text}>
                Si vous faites face à un bug, copiez le code nécessaire à la
                résolution.
              </Text>

              <View style={styles.inputBox}>
                <Text style={styles.preInput}>
                  Intitulé de la question{" "}
                  <Text style={{ color: primaryColor }}>*</Text>
                </Text>

                <TextInput style={styles.inputBar} />
                <Text style={styles.subInput}>
                  Choisir un titre approprié et explicite est la première étape
                </Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.preInput}>
                  Catégories <Text style={{ color: primaryColor }}>*</Text>
                </Text>
                <View style={styles.boxy}>
                  <Picker
                    selectedValue={this.state.category}
                    onValueChange={category => this.setState({ category })}
                    itemStyle={{
                      padding: 0,
                      margin: 0,
                      color: secondaryTextColor
                    }}
                  >
                    <Picker.Item label="Choisissez une catégorie..." value="" />
                    {this.state.categories.map(category => (
                      <Picker.Item
                        key={category}
                        label={category}
                        value={category}
                      />
                    ))}
                  </Picker>
                </View>
                <Text style={styles.subInput}>
                  Choisir de manière pertinente la catégorie, ne pas tout ranger
                  dans other !
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.preInput}>
                  Détails
                  <Text style={{ color: primaryColor }}> *</Text>
                </Text>
                <View style={{ minHeight: 300 }}>
                <DraftComponent showSubInput={true}/>
                </View>
              </View>
            </View>

          </View>
        </Card>
      </View>
    );
  }
  getDelta(text) {
    console.log("text", text);
  }
  onTextChange() {
    this.props.newResponse(response);
  }
  onLoadCallback() {}
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },

  text: {
    fontFamily: regularFontFamily
  },

  view: {
    flex: 1,
    backgroundColor: lightGreyColor
  },
  search: {
    marginTop: 20
  },
  cardStyle: {
    borderRadius: 3,
    margin: 8,
    padding: 15
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  titleText: {
    fontSize: titleFontSize,
    fontFamily: boldFontFamily,
    color: primaryColor
  },
  boxy: {
    //fontFamily: regularFontFamily,
    borderWidth: 1,
    borderColor: "#dedede",
    borderRadius: 5,
    marginVertical: 5,
    padding: 0
  },

  infosBox: {
    flex: 1,
    fontFamily: regularFontFamily,
    fontSize: paragraphFontSize,
    flexDirection: "column",
    justifyContent: "space-between",
    borderTopColor: "#dedede",
    borderTopWidth: 1,
    paddingVertical: 15,
    marginTop: 8,
    minHeight: 280
  },

  inputBox: {
    marginVertical: 15
  },
  subInput: {
    fontFamily: regularFontFamily,
    fontSize: 12,
    color: secondaryTextColor
  },
  inputBar: {
    padding: 10,
    marginVertical: 5,
    fontFamily: "firacode",
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#dedede",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    minWidth: 150
  },
  preInput: {
    fontFamily: regularFontFamily,
    color: blackColor
    //margin: 10
  }
});

export default QuestionFormComponent;
