import React from "react";
import HeaderComponent from "../components/layouts/HeaderComponent";
import Profil from "../containers/ProfilUserContainer";

class ProfilUserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };
  render() {
    return <Profil navigation={this.props.navigation} />;
  }
}
export default ProfilUserScreen;
