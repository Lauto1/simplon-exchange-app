import React from "react";
import Inscription from "../components/Inscription";
import HeaderComponent from "../components/layouts/HeaderComponent";
class RegisterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} title="Simplon-Exchange" />
    };
  };

  render() {
    return <Inscription />;
  }
}

export default RegisterScreen;
