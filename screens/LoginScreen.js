import React from "react";
import Connexion from "../components/Connexion";
import HeaderComponent from "../components/layouts/HeaderComponent";

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };

  render() {
    return <Connexion />;
  }
}

export default LoginScreen;
