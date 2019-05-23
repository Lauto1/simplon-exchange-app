import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button } from "react-native";
import { Card, Icon } from "react-native-elements";
import { WebViewQuillEditor, WebViewQuillViewer } from 'react-native-webview-quilljs';
import { primaryColor, lightGreyColor, boldFontFamily, titleFontSize } from "../helpers/styleGuidelines";

class AnwserFormComponent extends Component {
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
                            <Text style={styles.responseText}  >Répondre</Text>
                            
                            <View style={{ minHeight: 280 }} >
                            
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

        this.setState({ response: text.delta.ops[0].insert })

    }
    onTextChange() {
        let response = {
            "id": "93",
            "author": "falseAuthor",
            "points": 77,
            "upvote": 0,
            "content": this.state.response,
            "date": "09/10/2019"
        }
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
    }
});

export default AnwserFormComponent;