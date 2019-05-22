import "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import {
  paragraphFontSize,
  boldFontFamily,
  darkGreyColor,
  greyColor,
  whiteColor,
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
        <Text style={styles.preHeader}>
          ⇐ Hey Simplonnien.ne ! Rejoins-nous vites
        </Text>

        <View
          style={{
            backgroundColor: greyColor,
            padding: 20,
            flexDirection: "row"
          }}
        >
          <Icon
            name="menu"
            color={whiteColor}
            size={30}
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
          />

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
            style={{
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                paddingTop: 1,
                color: primaryColor,
                fontSize: 20,
                paddingLeft: 30,
                fontFamily: regularFontFamily
              }}
            >
              Simplon-Exchange
            </Text>
            <Text
              style={{
                paddingTop: 1,
                color: whiteColor,
                fontSize: titleFontSize,
                fontFamily: regularFontFamily
              }}
            >
              .Help
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preHeader: {
    color: whiteColor,
    backgroundColor: primaryColor,
    width: "100%",
    padding: 8,
    justifyContent: "flex-start",
    textAlign: "center",
    fontSize: 13,
    fontFamily: regularFontFamily
  },

  view: {
    backgroundColor: greyColor,
    paddingVertical: 15,
    paddingLeft: 10,
    flexDirection: "row"
  },

  headerHelp: {
    color: whiteColor,
    fontSize: titleFontSize,
    fontFamily: regularFontFamily,
    paddingTop: 1
  },

  headerTitle: {
    paddingTop: 1,
    paddingLeft: 15,
    color: primaryColor,
    fontSize: titleFontSize,
    fontFamily: regularFontFamily
  }
});

export default HeaderComponent;
