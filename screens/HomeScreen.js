import React from 'react';
import { View, Text,ScrollView } from 'react-native';
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

export default HomeScreen;