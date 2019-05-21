import React from "react";
import FaqComponent from "../components/faq";
import HeaderComponent from "../components/layouts/HeaderComponent";

class FaqScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: props => <HeaderComponent {...props} />
  });
  render() {
    return <FaqComponent />;
  }
}

export default FaqScreen;
