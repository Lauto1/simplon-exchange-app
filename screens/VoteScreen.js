import React from 'react';
import { View, Text } from 'react-native';
class VoteScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <Vote/>
            </View>
        );
    }
}

export default VoteScreen;
