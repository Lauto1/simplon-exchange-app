import "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import {
  paragraphFontSize,
  boldFontFamily,
  darkGreyColor,
  greyColor,
  lightGreyColor,
  primaryColor,
  regularFontFamily,
  subtitleFontSize,
  titleFontSize
} from "../../helpers/styleGuidelines";

class HeaderComponent extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: "#000", height: 24 }} />
        <Text style={styles.textStyle}>
          ⇐ Hey Simplonnien.ne ! Rejoins-nous vite
        </Text>

        <View
          style={{
            backgroundColor: "#2F3239",
            paddingVertical: 15,
            paddingLeft: 10,
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
                paddingLeft: 15,
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

const styles = StyleSheet.create({
  textStyle: {
    color: "#fff",
    backgroundColor: "#d6363e",
    width: "100%",
    padding: 8,
    justifyContent: "flex-start",
    textAlign: "center",
    fontSize: paragraphFontSize,
    fontFamily: regularFontFamily
  }
});

export default HeaderComponent;
