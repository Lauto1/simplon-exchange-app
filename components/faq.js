import React from "react"
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import * as faq from "../mock/faq.json"

class Faq extends React.Component {

    //permet de maper chaque question/reponse
    Faq() {
        return faq.faq.map(function (r, i) {
            return (
                <View style={styles.cart} key={i}>
                    <View style={styles.questionView}>
                        <Text style={styles.question}>{r.question}</Text>
                    </View>
                    <Text style={styles.answer}>{r.answer}</Text>
                </View>
            );
        });
    }

    //affiche chaque question/reponse
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Foire aux questions</Text>
                </View>
                {this.Faq()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        paddingLeft: 24,
        paddingRight: 24
    },
    titleView: {
        padding: 24,
        paddingTop: 40,
        marginBottom: 8,
        borderBottomColor: '#e99599',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "400",
        color: '#d6363e',
        textAlign: 'center'
    },
    cart: {
        backgroundColor: '#fff',
        marginVertical: 8,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    questionView: {
        paddingTop: 8,
        paddingBottom: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    question: {
        color: '#d6363e',
        textAlign: 'justify',
        fontWeight: "700",
        fontSize: 16,
    },
    answer: {
        color: '#2f323f',
        paddingVertical: 16,
        paddingHorizontal: 8
    }
})


export default Faq;
