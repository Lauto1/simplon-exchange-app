import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import { WebViewQuillEditor, WebViewQuillViewer } from 'react-native-webview-quilljs';

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
                <Card containerStyle={{ borderRadius: 3, margin: 8, padding: 0 }}>
                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                        <View  style={{flex:1,flexDirection:"column"}}>
                        <Text style={{ fontSize: 16, fontFamily: "firacodebold", color: "#d6363e" }} >Répondre</Text>

                            <View style={{ minHeight:200}}>
                                <WebViewQuillEditor
                                    ref={component => (this.webViewQuillEditor = component)}
                                    getDeltaCallback={this.getDeltaCallback}
                                    onLoad={this.onLoadCallback}
                                />
                            </View>
                        </View>
                    </View>
                </Card>
            </View>

        );
    }
    getDeltaCallback() {

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
    }
});

export default AnwserFormComponent;
