import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Question from '../components/Question';
import Searchbar from '../components/Searchbar';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <ScrollView style={styles.contentContainer}>
                <View style={styles.view}>
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
        );
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,

    },
    view: {
        flex: 2,
        justifyContent: 'flex-start',
        marginTop: 20

    },
    search: {
        marginTop: 20
    }
})
export default HomeScreen;