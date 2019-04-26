import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BugReportComponent from '../components/BugReportComponent'

class BugScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <BugReportComponent/>
            </View>
        );
    }
}

export default BugScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
});
