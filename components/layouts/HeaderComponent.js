import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";
import "@expo/vector-icons";

class HeaderComponent extends React.Component {
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
          style: { color: "#fff", fontSize: 20, fontFamily: "firacode" }
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
