import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View,  Text, StyleSheet} from 'react-native';


class ViewrComponent extends Component {

    render() {
        return (
            <ScrollView>
                <View > 
                    <View style={styles.wrapper}>
                        <Text style={styles.titleText}>Exchange ?</Text>
                        <Text>Un lieu d'échange convivial où toutes questions trouvera une réponse</Text>
                        <Text>Apprentissage de la pédagogie de l'entraide. Savoir questionner pour obtenir des réponses pertinentes</Text>
                    </View>

                    <View style={styles.wrapper}>
                        <Text style={styles.titleText}>Liens utiles</Text>
                        <TouchableOpacity 
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text>Accueil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')} 
                        >
                            <Text>Poser une question</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text>Aider la communauté</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{width: '90%', borderRadius: 5}}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            <Text>Foire Aux Questions</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.wrapper}>
                        <Text style={styles.titleText}>Intéret ?</Text>
                        <Text>Créer en tant que projet back office pour la fabrique de Roanne, cette outil à vocation pédagogique </Text>
                        <Text>a pour objectif de servir de lieu d'échange entre tous simploniens de toutes promotions.</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#2f3239',
        marginTop: 10,
        borderRadius: 5
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d6363e'
      },
    text: {
        flex: 0.9,
        color: '#fff'
    },
});

export default ViewrComponent;