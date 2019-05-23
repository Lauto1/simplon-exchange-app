import React from "react";
import Connexion from "../containers/Connexion";
import HeaderComponent from "../components/layouts/HeaderComponent";

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };

  render() {
    return <Connexion navigation={this.props.navigation} />;
  }
}

export default LoginScreen;
