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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <HomeContainer/>
            </View>
        );
    }
    onLoadCallback =()=>{
        console.log("loaded");
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