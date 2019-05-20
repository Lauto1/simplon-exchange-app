import React, { Component } from "react";
import HomeContainer from "../containers/HomeContainer";
import HeaderComponent from "../components/layouts/HeaderComponent";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello world"
    };
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };

  render() {
    return <HomeContainer navigation={this.props.navigation} />;
  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

export default HomeScreen;
