import React from 'react';
import { View, Text } from 'react-native';
import FaqComponent from "../components/faq";

class FaqScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View>
                <FaqComponent/>
            </View>
        );
    }
}

export default FaqScreen;
