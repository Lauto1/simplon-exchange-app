import React from "react";
import Profil from "../containers/ProfilUserContainer";
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
            <HeaderComponent 
                drawerNav={this.props.navigation}
                title="Simplon-Exchange"
            />
            <Profil/>
            </>
        );
    }
}
export default ProfilUserScreen;