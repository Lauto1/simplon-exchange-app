import { Formik } from "formik";
import React from "react";
// import { KeyboardAvoidingView } from 'react-native';
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import {
  primaryColor,
  blackColor,
  titleFontSize,
  whiteColor,
  lightGreyColor
} from "../helpers/styleGuidelines";

export default class Inscription extends React.Component {

  _API = "http://dev.simplon-exchange.help/api/";

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fabric_id: "",
      email: "",
      password: "",
      confirm_password: "",
      notif: false,
      fabrics: []
    };
    this.getFabrics()
  }

  getFabrics() {
    fetch(this._API + 'anon/fabrics', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      data = data.data.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
      return this.setState({ fabrics: data })
    }).catch((error) => {
      console.error(error)
    });
  }

  handleSubmit() {
    fetch(this._API + 'register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      console.log(response)
    }).then(() => {
      this.props.navigation.navigate('Connexion')
    }).catch((error) => {
      console.error(error)
    });
  }



  render() {
    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <View>
          <Formik
            initialValues={this.state}
          >
            {() => (
              <View style={styles.form}>
                <TextInput
                  style={styles.title}
                  editable={false}
                  value={"Enregistrement"}
                />
                <TextInput
                  placeholder="Nom de l'utilisateur"
                  style={styles.field}
                  onChangeText={e => {
                    this.setState({ name: e });
                  }}

                />
                <View style={styles.dropdown}>
                  <Dropdown
                    label="Quelle est votre fabrique Simplon ?"
                    data={this.state.fabrics}
                    onChangeText={itemValue => { this.setState({ fabric_id: itemValue }) }}
                  />
                </View>
                <TextInput
                  placeholder="E-mail"
                  style={styles.field}
                  onChangeText={e => {
                    this.setState({ email: e });
                  }}

                />
                <TextInput
                  placeholder="Mot de passe"
                  style={styles.field}
                  secureTextEntry={true}
                  onChangeText={e => {
                    this.setState({ password: e });
                  }}

                />
                <TextInput
                  placeholder="Répéter le mot de passe"
                  style={styles.field}
                  secureTextEntry={true}
                  onChangeText={e => {
                    this.setState({ confirm_password: e });
                  }}

                />
                <View style={styles.checkBox}>
                  <Text style={{ lineHeight: 30, marginRight: 10 }}>
                    Voulez-vous recevoir des notifications ?
                  </Text>
                  <Switch
                    onValueChange={value => this.setState({ notif: value })}
                    value={this.state.notif}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    color={primaryColor}
                    onPress={() => this.handleSubmit()}
                    title="S'enregistrer"
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: primaryColor,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    fontWeight: "500",
    fontSize: titleFontSize,
    borderBottomColor: lightGreyColor,
    borderBottomWidth: 1,
    padding: 10
  },
  form: {
    marginTop: 75,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: whiteColor,
    borderRadius: 5,
    borderColor: lightGreyColor,
    borderWidth: 1
  },
  field: {
    borderColor: lightGreyColor,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    width: "100%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  dropdown: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginBottom: -20,
    marginTop: -10
  },
  button: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5
  },
  checkBox: {
    padding: 10,
    width: "100%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
