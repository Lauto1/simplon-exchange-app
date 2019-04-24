import React from "react"
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import * as faq from "../mock/faq.json"

class Faq extends React.Component {

    //permet de maper chaque question/reponse
    Faq() {
        return faq.faq.map(function (r, i) {
            return (
                <View style={styles.container} key={i}>
                    <Text>{r.question}</Text>
                    <Text>{r.reponse}</Text>
                </View>
            );
        });
    }

    //affiche chaque question/reponse
    render() {
        return (
            <ScrollView>
                {this.Faq()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Faq;
