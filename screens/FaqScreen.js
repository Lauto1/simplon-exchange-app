import React from 'react';
import { View, Text } from 'react-native';
import FaqComponent from "../components/faq";
import HeaderComponent from "../components/layouts/HeaderComponent";
import FooterComponent from '../components/layouts/FooterComponent';

class FaqScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <>
                <HeaderComponent />
                <View>
                    <FaqComponent />
                </View>
                <FooterComponent />
            </>
        );
    }
}

export default FaqScreen;
