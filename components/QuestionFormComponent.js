import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, TextInput } from "react-native";
import { Card, Icon, Input } from "react-native-elements";
import { WebViewQuillEditor, WebViewQuillViewer } from 'react-native-webview-quilljs';
import { primaryColor, lightGreyColor, boldFontFamily, titleFontSize } from "../helpers/styleGuidelines";

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
                <Card containerStyle={styles.cardStyle}>
                    <View
                        style={styles.row}
                    >
                        <View style={styles.column}>
                            <Text style={styles.responseText} >Posez votre question</Text>

                            <View style={{
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "space-between",
                                borderTopColor: "#dedede",
                                borderTopWidth: 1,
                                paddingTop: 8,
                                marginTop: 8,
                                minHeight: 280
                            }} >
                                <Text>La précision et la rapidité de la réponse passe par une question correctement posée. Votre titre doit être explicite, votre question pas globale mais spécifique.
Si vous faites face à un bug, copiez le code nécessaire à la résolution.</Text>
                                <View >


                                    <View style={styles.row}>
                                        <Text>Intitulé de la question *</Text>
                                        <TextInput style={styles.inputBar} />
                                    </View>
                                    
                                </View >
                                <View style={{ minHeight: 250 }}>
                                    <WebViewQuillEditor
                                        ref={component => (this.webViewQuillEditor = component)}
                                        getDeltaCallback={this.getDelta}
                                        onLoad={this.onLoadCallback}
                                    />
                                </View>
                            </View>
                            <Button color={primaryColor} title="Répondre" onPress={() => { this.onTextChange() }}></Button>
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

        this.props.newResponse(response)
    }
    onLoadCallback() {

    }
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
        padding: 0
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    column: {
        flex: 1,
        flexDirection: "column"
    },
    responseText: {
        marginLeft: 10,
        fontSize: titleFontSize,
        fontFamily: boldFontFamily,
        color: primaryColor
    },
    inputBar: {
        marginTop: 50,
        padding: 0,
        fontFamily: 'firacode',
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
});

export default QuestionFormComponent;
