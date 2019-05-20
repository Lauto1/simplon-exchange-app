import React from 'react';
import { View, Text } from 'react-native';
import Connexion from "../components/Connexion";
class LoginScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    };

    render() {
        return (
            <Connexion/>
        );
    }
}

export default LoginScreen;
