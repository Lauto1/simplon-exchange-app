import React from "react";
import { View } from "react-native";
import HeaderComponent from "../components/layouts/HeaderComponent";
import Vote from "../components/VoteComponent";

class VoteScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };
  render() {
    return (
      <View>
        <Vote />
      </View>
    );
  }
}

export default VoteScreen;
