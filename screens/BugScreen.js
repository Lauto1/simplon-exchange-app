import React from 'react';
import { View, Text } from 'react-native';
import BugReportComponent from '../components/Formulaire'

class BugScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <BugReportComponent/>
            </View>
        );
    }
}

export default BugScreen;
