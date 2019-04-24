import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';


class Searchbar extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <View>
                <SearchBar style={{ marginTop: 50 }}
                    placeholder="Recherche une question, tu es sûr de trouver une réponse"
                    platform="default" lightTheme={true}
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        )
    }
}
export default Searchbar;
