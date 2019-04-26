import "@expo/vector-icons";
import React, { Component } from "react";
import { Header } from "react-native-elements";

class HeaderComponent extends Component {
  render() {
    return (
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          padding: 8,
          onPress: () => {
            this.toggleDrawer();
          }
        }}
        centerComponent={{
          text: this.props.title,
          style: { color: "#fff", fontSize: 14, fontFamily: "firacode" }
        }}
        backgroundColor="#2F3239"
      />
    );
  }
  /**
   * Active ou desactive le drawer au click
   */
  toggleDrawer = () => {
    this.props.drawerNav.toggleDrawer();
  };
}

export default HeaderComponent;
