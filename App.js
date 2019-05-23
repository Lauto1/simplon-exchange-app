import React, { Component } from "react";
import { Font } from "expo";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Navigator from "./navigation/navigator";
import { Provider } from "react-redux";
import store from "./store";
import { Amplitude } from "expo";
import { analyticsAPIKey } from "./example.config";

import { Permissions, Notifications } from 'expo';


const PUSH_REGISTRATION_ENDPOINT = ' http://56a0ffb1.ngrok.io/token';
const MESSAGE_ENPOINT = ' http://56a0ffb1.ngrok.io/message';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppLoading: true,
      notification: null,
      messageText: ''
    };
    Amplitude.initialize(analyticsAPIKey);
  }


  async componentWillMount() {
    await Font.loadAsync({
      firacode: require("./assets/fonts/firacoderegular.ttf"),
      firacodebold: require("./assets/fonts/firacodebold.ttf")
    });
    this.setState({ AppLoading: false });
  }
  handleNotification = (notification) => {
    this.setState({ notification });
  }

  handleChangeText = (text) => {
    this.setState({ messageText: text });
  }

  sendMessage = async () => {
    console.log('test du fetch')
    fetch(MESSAGE_ENPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: this.state.messageText,
      }),
    });
    this.setState({ messageText: '' });
  }

  registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();
    return fetch(PUSH_REGISTRATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: {
          value: token,
        },
        user: {
          username: 'Simplon',
          name: 'Simplon'
        },
      }),
    });

    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync();
  }

  renderNotification() {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>A new message was recieved!</Text>
        <Text>{this.state.notification.data.message}</Text>
      </View>
    )
  }

  render() {
    if (this.state.AppLoading) {
      return <Text>Loading....</Text>;
    } else {
      return (
        <Provider store={store}>
          <Navigator />
          
          {/* <View style={styles.container}>
        <TextInput
          value={this.state.messageText}
          onChangeText={this.handleChangeText}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.sendMessage}
        >
        <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        {this.state.notification ?
          this.renderNotification()
        : null}
      </View> */}
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: 300,
    borderColor: '#f6f6f6',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  button: {
    padding: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  label: {
    fontSize: 18
  }
});