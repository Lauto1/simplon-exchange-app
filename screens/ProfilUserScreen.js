import React from "react";
import Profil from "../components/ProfilUser";
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
                <HeaderComponent />
                <Text>Wher is my Profil ?! </Text>
                    <Profil />
                
                <FooterComponent />
            </>
        );
    }
}
export default ProfilUserScreen;