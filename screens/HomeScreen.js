import React from 'react';
import { View, Text } from 'react-native';
import  FooterComponent  from '../components/layouts/Footer';
class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>HomeScreen</Text>
                <FooterComponent/>
            </View>
        );
    }
}

export default HomeScreen;