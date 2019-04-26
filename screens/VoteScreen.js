import React from 'react';
import { View, Text } from 'react-native';
import VoteComponent from "../components/faq";

class VoteScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <Text>Bonjour</Text>
            </View>
        );
    }
}

export default FaqScreen;
