import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  TextInput
} from "react-native";
import { Card, Icon, Input } from "react-native-elements";
import {
  WebViewQuillEditor,
  WebViewQuillViewer
} from "react-native-webview-quilljs";
import {
  primaryColor,
  lightGreyColor,
  boldFontFamily,
  titleFontSize,
  whiteColor,
  blackColor,
  secondaryTextColor,
  regularFontFamily
} from "../helpers/styleGuidelines";

class QuestionFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello world",
      response: ""
    };
  }
  render() {
    return (
      <View style={styles.view}>
        <View style={{ height: 120, backgroundColor: blackColor }} />
        <Card containerStyle={styles.cardStyle}>
          <View style={styles.column}>
            <Text style={styles.titleText}>Posez votre question</Text>

            <View style={styles.infosBox}>
              <Text>
                La précision et la rapidité de la réponse passe par une question
                correctement posée. Votre titre doit être explicite, votre
                question pas globale mais spécifique.
              </Text>
              <Text />
              <Text>
                Si vous faites face à un bug, copiez le code nécessaire à la
                résolution.
              </Text>

              <View style={styles.inputBox}>
                <Text style={styles.backgroundBlack}>
                  Intitulé de la question{" "}
                  <Text style={{ color: primaryColor }}>*</Text>
                </Text>

                <TextInput style={styles.inputBar} />
                <Text style={styles.subInput}>
                  Choisir un titre approprié et explicite est la première étape
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ marginBottom: 5 }}>
                  Détails
                  <Text style={{ color: primaryColor }}> *</Text>
                </Text>
                <View style={{ minHeight: 300 }}>
                  <WebViewQuillEditor
                    ref={component => (this.webViewQuillEditor = component)}
                    getDeltaCallback={this.getDelta}
                    onLoad={this.onLoadCallback}
                  />
                </View>

                <Text style={styles.subInput}>
                  Ecrire la description de votre problème en entrant tous les
                  détails possibles qui en permettront la résolution.
                </Text>
              </View>
            </View>
            <Button
              color={primaryColor}
              title="Question"
              onPress={() => {
                this.onTextChange();
              }}
            />
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
  infosBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: regularFontFamily,
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
    fontSize: 12,
    color: secondaryTextColor
  },

  inputBar: {
    padding: 0,
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
  backgroundBlack: {
    color: blackColor
    //margin: 10
  }
});

export default QuestionFormComponent;
