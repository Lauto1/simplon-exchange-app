import "@expo/vector-icons";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

import {
  primaryColor,
  whiteColor,
  greyColor,
  regularFontFamily,
  blackColor,
  titleFontSize
} from "../../helpers/styleGuidelines";

class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: blackColor, height: 24 }} />
        <Text
          style={{
            color: whiteColor,
            backgroundColor: primaryColor,
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
            backgroundColor: greyColor,
            padding: 20,
            flexDirection: "row"
          }}
        >



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
                paddingLeft: 65,
                fontFamily: regularFontFamily,
                letterSpacing: -2
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

          <View style={{
            marginLeft: 40
          }}>
            <Icon
              name="menu"
              color={whiteColor}
              size={30}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderComponent;
