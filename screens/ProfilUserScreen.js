import React from "react";
import Profil from "../components/ProfilUser";
import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from "../components/layouts/HeaderComponent";
import FooterComponent from '../components/layouts/FooterComponent';

class ProfilUserScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <>

            export default FaqScreen;
            
                <HeaderComponent />
                <View>
                    <Profil />
                </View>
                <FooterComponent />
            </>
        );
    }
}
export default ProfilUserScreen;