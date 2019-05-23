import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button } from "react-native";
import { Card, Icon } from "react-native-elements";
import { primaryColor, lightGreyColor, boldFontFamily, titleFontSize } from "../helpers/styleGuidelines";
import DraftComponent from "./DraftComponent"

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


                            <DraftComponent />
                        </View>
                    </View>
                </Card>
            </View>

        );
    }
    getDelta(text) {




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
