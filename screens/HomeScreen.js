import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HomeContainer from "../containers/HomeContainer";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello world"
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
    return <HomeContainer drawerNav={this.props.navigation} />;
  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

<<<<<<< HEAD
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
export default HomeScreen;
=======
export default HomeScreen;
>>>>>>> origin/team-2-questions-list
