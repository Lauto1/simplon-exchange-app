import React from 'react';
import { View } from 'react-native';
import VoteSystemComponent from "../components/VoteSystemComponent";

export default class VoteSystemScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        // return {
        //     header: null,
        // };
    }
    render() {
        return (
            <View>
                <VoteSystemComponent/>
            </View>
        );
    }
}
