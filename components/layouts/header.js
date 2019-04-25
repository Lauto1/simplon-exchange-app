import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";

import "@expo/vector-icons";

class Headernav extends React.Component {
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
          text: "Accueil",
          style: { color: "#fff", fontSize: 16 }
        }}
        backgroundColor="#2F3239"
      />
    );
  }
  toggleDrawer = () => {
    this.props.drawerNav.toggleDrawer();
  };
}

export default Headernav;
