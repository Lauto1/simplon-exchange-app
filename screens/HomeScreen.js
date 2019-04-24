import React from 'react';
import { View, Text } from 'react-native';
import QuestionList from '../containers/QuestionList'
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
                <QuestionList></QuestionList>
            </View>
        );
    }
}

export default HomeScreen;