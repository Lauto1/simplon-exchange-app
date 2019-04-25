import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet} from 'react-native';


class FooterComponent extends Component {

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
                        <TouchableOpacity 
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text style={styles.textStyle}>Accueil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')} 
                        >
                            <Text style={styles.textStyle}>Poser une question</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text style={styles.textStyle}>Aider la communauté</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text style={styles.textStyle}>Foire Aux Questions</Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <Text style={styles.titleText}>Intéret ?</Text>
                        <Text style={styles.textStyle}>Créer en tant que projet back office pour la fabrique de Roanne,</Text>
                        <Text style={styles.textStyle}> cette outil à vocation pédagogique a pour objectif,</Text>
                        <Text style={styles.textStyle}>de servir de lieu d'échange entre tous simploniens de toutes promotions.</Text>
                    </View>
                </View>
                <View>
                    <Text>Copyright 2019 Une Question ? | 
                        <TouchableOpacity
                            style={{width: '90%', borderRadius: 5}}
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                            >
                            <Text style={styles.textStyle}>By Simplon-Vénissieux</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2f3239',
    },

    View: {
        flex: 2,
        justifyContent: 'flex-start',
        marginTop: 20,
        backgroundColor: '#dee2e6',
    },

    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d6363e',
        width: '100%',   
        justifyContent: 'space-evenly'
      },

    textStyle: {
        color: '#fff',
        fontSize:12
    },
});

export default FooterComponent;