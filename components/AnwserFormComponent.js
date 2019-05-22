import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon, Button } from "react-native-elements";
import { WebViewQuillEditor, WebViewQuillViewer } from 'react-native-webview-quilljs';
import { primaryColor, lightGreyColor, boldFontFamily, titleFontSize } from "../helpers/styleGuidelines";

class AnwserFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentToDisplay: "hello world"
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
                            <Text style={styles.responseButton}  >Répondre</Text>

                            <View style={{ minHeight: 400 }}>
                                <WebViewQuillEditor
                                    ref={component => (this.webViewQuillEditor = component)}
                                    getDeltaCallback={text => this.getDeltaCallback(text)}
                                    onLoad={this.onLoadCallback}
                                />
                            </View>
                            <Button style={styles.responseButton} title="Répondre" onPress={() => { this.onTextChange() }}></Button>
                        </View>
                    </View>
                </Card>
            </View>

        );
    }
    getDeltaCallback(text) {
        console.log("text", text.delta.ops[0].insert);



    }
    onTextChange() {
        console.log("quill", this.webViewQuillEditor);

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
        backgroundColor: "#dee2e6"
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
    responseButton: {
        fontSize: titleFontSize,
        fontFamily: boldFontFamily,
        color: primaryColor
    }
});

export default AnwserFormComponent;
