import React, { Component } from "react";
// import Example from "../components/Example";
import HeaderComponent from "../components/layouts/HeaderComponent";
import Contact from "../components/Contact";

class ContactScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />
    };
  };

  render() {
    return <Contact />;
  }
}

export default ContactScreen;
