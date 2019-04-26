import React from 'react';
import { View, Text } from 'react-native';
import Vote from "../components/VoteComponent";

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
