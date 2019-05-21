import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { regularFontFamily } from "../helpers/styleGuidelines"


class SearchbarComponent extends Component {
    state = {
        search: ""
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 10

        return (
            <KeyboardAvoidingView style={styles.view}
                keyboardVerticalOffset={keyboardVerticalOffset}
                behavior="padding" enabled>

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
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "column",
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: regularFontFamily,

    },
    searchBar: {
        marginTop: 50,
        padding: 0,
        flex: 1,
        justifyContent: "flex-end",
        fontFamily: regularFontFamily,
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
        fontFamily: regularFontFamily,
    },
    buttonContainer: {
        padding: 3,
        marginTop: 30,
        fontFamily: regularFontFamily,
    },
    button: {
        backgroundColor: "#d5363e",
        color: '#d5363e',
    }
});

export default SearchbarComponent;
