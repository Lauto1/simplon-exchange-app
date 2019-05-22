import React from "react";
import FaqComponent from "../components/faq";
import HeaderComponent from "../components/layouts/HeaderComponent";

class FaqScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: props => <HeaderComponent {...props} title="Simplon-Exchange" />
  });
  render() {
    return <FaqComponent />;
  }
}

export default FaqScreen;
