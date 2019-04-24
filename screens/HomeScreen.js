import React from 'react';
import { View, Text,ScrollView,StyleSheet } from 'react-native';
import HomeContainer from "../containers/HomeContainer"
class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentToDisplay :"hello world"

          };
      
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <HomeContainer drawerNav={this.props.navigation}/>
            </View>
        );
    }
    onLoadCallback =()=>{
        console.log("loaded");
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default HomeScreen;
