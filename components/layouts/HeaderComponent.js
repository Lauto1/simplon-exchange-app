import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import "@expo/vector-icons";

class HeaderComponent extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: "#000", height: 24 }} />
        <Text
          style={{
            color: "#fff",
            backgroundColor: "#d6363e",
            width: "100%",
            padding: 8,
            justifyContent: "flex-start",
            textAlign: "center"
          }}
        >
          ⇐ Hey Simplonnien.ne ! Rejoins-nous vite
        </Text>

        <View
          style={{
            backgroundColor: "#2F3239",
            padding: 20,
            flexDirection: "row"
          }}
        >
          <Icon
            name="menu"
            color="#fff"
            size={30}
            onPress={() => {
              this.toggleDrawer();
            }}
          />

          <TouchableOpacity
            onPress={() => {
              this.toggleDrawer();
            }}
            style={{
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                paddingTop: 1,
                color: "#d6363e",
                fontSize: 20,
                paddingLeft: 30,
                fontFamily: "firacode"
              }}
            >
              {this.props.title}
            </Text>
            <Text
              style={{
                paddingTop: 1,
                color: "#fff",
                fontSize: 20,
                fontFamily: "firacode"
              }}
            >
              .Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
