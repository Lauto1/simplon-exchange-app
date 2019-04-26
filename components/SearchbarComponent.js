import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';


class SearchbarComponent extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
        this.props.searchQuestions(search)
        
    };
    render() {
        const { search } = this.state;
        return (
            <View>
                <SearchBar style={{ marginTop: 50, fontFamily: 'firacode' }} inputStyle={{ fontFamily: "firacode" }}
                    placeholder="Recherche une question, tu es sûr-e de trouver une réponse"
                    platform="default" lightTheme={true}
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        )
    }
}
export default SearchbarComponent;
