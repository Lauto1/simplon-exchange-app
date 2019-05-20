import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

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
            <View>
                <SearchBar
                    style={styles.searchBar}
                    inputStyle={{ fontFamily: "firacode" }}
                    placeholder="Recherche une question, tu es sûr-e de trouver une réponse"
                    platform="default"
                    leftIconContainerStyle={styles.leftIconContainerStyle}
                    lightTheme={true}
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftIconContainerStyle: {
        color: '#fff',
        backgroundColor: '#000',
        name: "pen"
    },
    searchBar: {
        marginTop: 50,
        fontFamily: "firacode",
        width: 300
    }
})
export default SearchbarComponent;
