import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { primaryColor, titleFontSize, whiteColor } from "../helpers/styleGuidelines";

class ScrollToTopButtonComponent extends React.Component {
  /**composant Boutton scroll vers le haut */
  render() {
    const { onPress } = this.props;

    return (
      <View
        style={{
          position: "absolute",
          right: 20,
          bottom: 20
        }}
      >
        <Button
          buttonStyle={{ backgroundColor: primaryColor }}
          icon={<Icon name="chevron-up" size={titleFontSize} color={whiteColor} />}
          onPress={onPress}
        />
      </View>
    );
  }
}

export default ScrollToTopButtonComponent;
