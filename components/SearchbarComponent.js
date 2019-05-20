import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchBar, Button, Icon } from 'react-native-elements';


class SearchbarComponent extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <View style={styles.view}>
                <Icon name='pencil' type='font-awesome' iconStyle={{ color: "#fff", borderRadius: 5, marginTop: 30, backgroundColor: "#000", width: 40, height: 45 }} />
                <TextInput
                    style={styles.textInput}
                    onFocus={this.clearInput}
                    onChangeText={this.updateSearch}
                    value={search}
                    placeholder={"Recherche une question, tu es sûr-e de trouver une réponse"}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={this.updateSearch}
                        buttonStyle={{ backgroundColor: "#d5363e" }}
                        title={'Rechercher'}
                        color={' #fff'}
                        accessibilityLabel={'Rechercher'}
                    />
                </View>
            </View>
            // <View>
            //     <SearchBar style={{ marginTop: 50, fontFamily: 'firacode' }}
            //         searchIcon={() =>
            //             <Icon name='pencil'
            //                 type='font-awesome' iconStyle={{ color: "#fff" }} />
            //         }
            //         inputStyle={{ paddingLeft: 5, backgroundColor: "#fff", fontFamily: "firacode" }}
            //         // inputContainerStyle={{ backgroundColor: "#000" }}
            //         leftIconContainerStyle={{ backgroundColor: "#000", paddingLeft: 8, paddingRight: 8, width: 40, marginLeft: 0, marginRight: 0 }}
            //         rightIconContainerStyle={{ backgroundColor: "#d5363e" }}
            //         placeholder="Recherche une question, tu es sûr-e de trouver une réponse"
            //         platform="default" lightTheme={true}
            //         onChangeText={this.updateSearch}
            //         value={search}
            //     />
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15
    },
    textInput: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: "#fff",
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 3,
        flex: 2,
        marginTop: 30
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 3,
        marginTop: 30
    }
});

export default SearchbarComponent;
