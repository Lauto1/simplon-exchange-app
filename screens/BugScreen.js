import React from 'react';
import { View, Text } from 'react-native';
import Formulaire from '../components/Formulaire'

class BugScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <Formulaire/>
            </View>
        );
    }
}

export default BugScreen;
