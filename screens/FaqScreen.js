import React from 'react';
import { View, Text } from 'react-native';
class FaqScreen extends React.Component {

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

export default FaqScreen;
