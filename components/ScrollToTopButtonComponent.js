import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class ScrollToTopButtonComponent extends React.Component {
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
          buttonStyle={{ backgroundColor: "#d5363e" }}
          icon={<Icon name="chevron-up" size={20} color="white" />}
          onPress={onPress}
        />
      </View>
    );
  }
}

export default ScrollToTopButtonComponent;
