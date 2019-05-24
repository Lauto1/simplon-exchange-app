import React from "react";
import Connexion from "../containers/Connexion";
import HeaderComponent from "../components/layouts/HeaderComponent";

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} title="Simplon-Exchange" />
    };
  };

  render() {
    return <Connexion navigation={this.props.navigation} />;
  }
}

export default LoginScreen;
