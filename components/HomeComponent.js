import React from 'react';
import { StyleSheet, Text, Modal, View, ScrollView, Button, Alert, FlatList, TouchableOpacity, RefreshControl, Dimensions, Linking } from 'react-native';
import Question from '../components/Question';
import Searchbar from '../components/Searchbar';
import Headernav from "../components/layouts/header";
class HomeComponent extends React.Component {
    render() {
        return (
            <ScrollView style={styles.contentContainer}>
                <View style={styles.view}>
                <Headernav drawerNav={this.props.drawerNav} />
                    <Searchbar style={styles.search} />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </View>
            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,

    },
    view: {
        flex: 2,
        justifyContent: 'flex-start',
        marginTop: 20,
        backgroundColor: '#dee2e6'

    },
    search: {
        marginTop: 20
    }
})
export default HomeComponent;