import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";

import "@expo/vector-icons";

class Headernav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={styles.headerstyle}
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
      </View>
    );
  }
  toggleDrawer = () => {
    this.props.drawerNav.toggleDrawer();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  headerstyle: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start"
  }
});

export default Headernav;
