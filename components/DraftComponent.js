import React, { Component } from "react";
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import { primaryColor, regularFontFamily, secondaryTextColor } from "../helpers/styleGuidelines";

//   import {KeyboardAvoidingView} from 'react-native';
//import getRNDraftJSBlocks from 'react-native-draftjs-render';

/**TODO Changer le text input par un editeur editeur wysiwyg */
class DraftComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentToDisplay: "hello world",
            text: ""
        };
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="position" enabled>
                <View>
                    <TextInput multiline={true} style={styles.textInput}
                        numberOfLines={8}
                        onChangeText={(text) => this.getText(text)}
                        value={this.state.text} placeholder="Entrez votre réponse" />
                        {this.props.showSubInput ? <Text style={styles.subInput}>
                        Ecrire la description de votre problème en entrant tous les
                        détails possibles qui en permettront la résolution.
                    </Text> : null}
                    <Button color={primaryColor} title="Répondre" onPress={() => { this.onTextChange() }}></Button>
                </View>               
            </KeyboardAvoidingView>
        );
    }
    postResponse() {
        let response = {
            "id": "93",
            "user": { "name": "falseAuthor" },
            "points": 77,
            "views": 0,
            "description": this.state.text,
            "created_at": "09/10/2019"
        }
        /**
         * Get user here and post anwser
         * this.props.addResponse(response) ?
         */ 
        //this.props.newResponse(response)
    }
    getText(text) {

        this.setState({ text })

    }

    onLoadCallback() {

    }
}

const styles = StyleSheet.create({ 
    textInput: {
        minHeight:250,
        padding: 10
    },
    subInput: {
        fontFamily: regularFontFamily,
        fontSize: 12,
        color: secondaryTextColor
    }
})


export default DraftComponent;
