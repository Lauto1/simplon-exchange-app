import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, ScrollView, TextInput } from "react-native";
import { Card, Icon } from "react-native-elements";
import { primaryColor, lightGreyColor, boldFontFamily, titleFontSize } from "../helpers/styleGuidelines";
//import getRNDraftJSBlocks from 'react-native-draftjs-render';

/**TODO Changer le text input par un editeur editeur wysiwyg */
class DraftComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentToDisplay: "hello world",
            text: "Entrez votre Réponse"
        };
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}><TextInput multiline={true}
                numberOfLines={8}
                onChangeText={(text) => this.getText(text)}
                value={this.state.text} />
                <Button color={primaryColor} title="Répondre" onPress={() => { this.onTextChange(this.state.text) }}></Button>
                </ScrollView>
        );
    }
    onTextChange(text) {
        let response = {
            "id": "93",
            "user": { "name": "falseAuthor" },
            "points": 77,
            "views": 0,
            "description": text,
            "created_at": "09/10/2019"
        }
        //this.props.newResponse(response)
    }
    getText(text) {

        this.setState({ text })

    }

    onLoadCallback() {

    }
}




export default DraftComponent;
