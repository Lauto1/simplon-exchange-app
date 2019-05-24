import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import {
    blackColor,
    whiteColor,
    boldFontFamily,
    regularFontFamily,
    paragraphFontSize,
} from "../helpers/styleGuidelines"


class SearchbarComponent extends Component {
    state = {
        search: "",
        showLoading: false
    };

    updateSearch = search => {
        setTimeout(() => {
            this.props.searchQuestions(search)
        }, 2000);
        this.setState({ search, showLoading: true });
        setTimeout(() => {
            this.setState({ showLoading: false })
        }, 2000);
    };
    render() {
        const { search } = this.state;
        return (
            <KeyboardAvoidingView behavior="position" enabled>
                <SearchBar style={styles.searchBar}
                    searchIcon={() =>
                        <Icon name='pencil'
                            type='font-awesome' iconStyle={{ color: "#fff" }} />
                    }
                    loadingProps={{ backgroundColor: "#fff" }}
                    showLoading={this.state.showLoading}
                    iconContainerStyle={{ borderBottomLeftRadius: 0 }}
                    containerStyle={styles.containerStyle
                    }
                    inputContainerStyle={{ backgroundColor: "#fff" }}
                    inputStyle={styles.inputStyle}
                    textInput={styles.textInput}
                    leftIconContainerStyle={styles.leftIconContainerStyle}
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
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: boldFontFamily
    },
    searchBar: {
        marginTop: 50,
        padding: 0,
        fontFamily: regularFontFamily,
        backgroundColor: whiteColor,
        borderRadius: 0,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    textInput: {
        fontSize: 16,
        color: whiteColor,
        backgroundColor: whiteColor,
        borderBottomColor: whiteColor,
        paddingBottom: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        flex: 2,
        marginTop: 30,
        fontFamily: regularFontFamily
    },
    buttonContainer: {
        padding: 3,
        marginTop: 30,
        fontFamily: regularFontFamily
    },
    inputStyle: {
        marginLeft: 0,
        marginRight: -30,
        paddingLeft: 5,
        paddingRight: 0,
        backgroundColor: whiteColor,
        fontFamily: regularFontFamily,
        fontSize: paragraphFontSize,
        borderBottomRightRadius: 0,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        borderBottomLeftRadius: 0,
    },
    containerStyle: {
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
    },
    leftIconContainerStyle: {
        backgroundColor: blackColor,
        width: 40,
        height: 40,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        paddingTop: 0,
        borderRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    }
});

export default SearchbarComponent;
