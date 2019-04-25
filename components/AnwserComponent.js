import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import Headernav from "../components/layouts/header";
 
class AnwserComponent extends Component {
  render() {

    const {answer} = this.props
    console.log(this.props);
    

    return (
      <View style={styles.view}>
        <Card>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {answer.karma}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 16,
                }}
              >
                {answer.content}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ fontSize: 16,marginBottom: 10 }}>{answer.date}</Text>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>{answer.author}</Text>
              </View>
            </View>
          </View>
        </Card>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  view: {
    flex: 1,
    backgroundColor: "#dee2e6"
  },
  search: {
    marginTop: 20
  }
});

export default AnwserComponent;
