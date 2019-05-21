import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchBar, Button, Icon } from 'react-native-elements';


class SearchbarComponent extends Component {
    state = {
        search: ""
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            // <View style={styles.view}>
            //     <View style={{ flexDirection: "row" }}>
            //         <Icon name='pencil' type='font-awesome' iconStyle={{ color: "#fff", borderRadius: 5, marginTop: 30, backgroundColor: "#000", width: 40, height: 45 }} />
            //         <TextInput
            //             style={styles.textInput}
            //             onFocus={this.clearInput}
            //             onChangeText={this.updateSearch}
            //             value={search}
            //             placeholder={"Recherche une question, tu es sûr-e de trouver une réponse"}
            //         />
            //     </View>
            //     <View style={styles.buttonContainer}>
            //         <Button onPress={this.updateSearch}
            //             style={styles.button}
            //             title={'Rechercher'}
            //             accessibilityLabel={'Rechercher'}
            //         />
            //     </View>
            // </View>


            // Try with react Element SearchBar - could not make it work
            <View style={{ paddingVertical: 0 }}>
                <SearchBar style={styles.searchBar}
                    searchIcon={() =>
                        <Icon name='pencil'
                            type='font-awesome' iconStyle={{ color: "#fff" }} />
                    }
                    containerStyle={{
                        padding: 0,
                        margin: 0,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                        borderBottomRightRadius: 0,
                        borderBottomEndRadius: 0,
                        borderBottomStartRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: "transparent",
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    }}
                    inputStyle={{
                        marginLeft: 0,
                        marginRight: -30,
                        paddingLeft: 5,
                        paddingRight: 0,
                        backgroundColor: "#fff",
                        fontFamily: "firacode",
                        fontSize: 12, borderBottomRightRadius: 0,
                        borderBottomEndRadius: 0,
                        borderBottomStartRadius: 0,
                        borderBottomLeftRadius: 0,
                    }} textInput={styles.textInput}
                    // inputContainerStyle={{ backgroundColor: "#000" }}
                    leftIconContainerStyle={{
                        backgroundColor: "#000",
                        width: 40,
                        height: 40, marginLeft: 0,
                        marginRight: 0, marginTop: 0,
                        paddingTop: 0, borderRadius: 0,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0
                    }}
                    clearIcon={false}
                    placeholder="Recherche une question, tu es sûr-e de trouver une réponse"
                    platform="default"
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: "firacodebold"
    },
    searchBar: {
        marginTop: 50,
        padding: 0,
        fontFamily: 'firacode',
        backgroundColor: "#d5363e",
        borderRadius: 0,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    textInput: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: "#fff",
        borderBottomColor: '#fff',
        // borderBottomWidth: 1,
        paddingBottom: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        flex: 2,
        marginTop: 30,
        fontFamily: "firacode"
    },
    buttonContainer: {
        padding: 3,
        marginTop: 30,
        fontFamily: "firacode"
    },
    button: {
        backgroundColor: "#d5363e",
        color: '#d5363e',
    }
});

export default SearchbarComponent;
