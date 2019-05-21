import React, { Component } from "react";
// import Example from "../components/Example";
import HeaderComponent from "../components/layouts/HeaderComponent";
import Statistiques from "../components/Statistique";

class StatistiquesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };

  render() {
    return <Statistiques />;
  }
}

export default StatistiquesScreen;
