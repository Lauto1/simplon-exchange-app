import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Linking, View, Text, StyleSheet} from 'react-native';


class FooterComponent extends Component {

/***Composant FOOTER connecter au screen (HomeScreen) & re-utilisable comme le HEADER dans les autres composants*/
    render() {
        return (
            <ScrollView>
                <View style={styles.wrapper}> 
                    <View >
                        <Text style={styles.titleText}>Exchange ?</Text>
                        <Text style={styles.textStyle}>Un lieu d'échange convivial où toutes questions trouvera une réponse</Text>
                        <Text style={styles.textStyle}>Apprentissage de la pédagogie de l'entraide. </Text>
                        <Text style={styles.textStyle}>Savoir questionner pour obtenir des réponses pertinentes</Text>
                    </View>

                    <View >
                        <Text style={styles.titleText}>Liens utiles</Text>

                        <Text style={styles.textStyle}>Accueil</Text>

                        <Text style={styles.textStyle}>Poser une question</Text>

                        <Text style={styles.textStyle}>Aider la communauté</Text>
                        <Text style={styles.textStyle}>Foire Aux Questions</Text>
                    </View>

                    <View >
                        <Text style={styles.titleText}>Intéret ?</Text>
                        <Text style={styles.textStyle}>Créer en tant que projet back office pour la fabrique de Roanne,</Text>
                        <Text style={styles.textStyle}> cette outil à vocation pédagogique a pour objectif,</Text>
                        <Text style={styles.textStyle}>de servir de lieu d'échange entre tous simploniens de toutes promotions.</Text>
                    </View>
                </View>
                <View style={styles.Copyright}>
                    <Text style={styles.CopyrightItems}>Copyright 2019 Une Question ? | </Text>
                    <TouchableOpacity
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                    >
                         <Text style={styles.CopyrightItems}>By Simplon-Vénissieux</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f3239',
        width: '100%'
    },

    View: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        backgroundColor: '#dee2e6',
      
    },
    Copyright: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222429',
    },
    CopyrightItems: {
        fontSize: 9,
        color: '#fff',
    },

    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#d6363e',  
        justifyContent: 'space-evenly'
      },

    textStyle: {
        color: '#fff',
        fontSize:8,
    },
});

export default FooterComponent;