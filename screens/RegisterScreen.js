import React from 'react';
import { View, Text } from 'react-native';
import Inscription from "../components/Inscription";
class RegisterScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    };

    render() {
        return (
            <Inscription/>
        );
    }
}

export default RegisterScreen;
