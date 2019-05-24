import "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import * as connexion from "../../mock/connexion.json";
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
        {/* <Text style={styles.preHeader}>
          ⇐ Hey Simplonnien.ne ! Rejoins-nous vites
        </Text> */}

        <Text style={styles.preHeader}>
         Bonjour {connexion.users[1].name}. Tu as {connexion.users[1].points} point(s) de karma.
        </Text>

        <View style={styles.view}>
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
            <Text style={styles.headerTitle}>{this.props.title}</Text>
            <Text style={styles.headerHelp}>.Help</Text>
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
