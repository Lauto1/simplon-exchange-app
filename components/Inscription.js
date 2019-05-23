import { Formik } from "formik";
import React from "react";
import {KeyboardAvoidingView} from 'react-native';
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
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
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fabrik: "",
      email: "",
      password: "",
      repeatPassword: "",
      notif: false
    };
  }

  render() {
    let fabrik = [
      {
        value: "Roanne"
      },
      {
        value: "Rodez"
      },
      {
        value: "Cahors"
      },
      {
        value: "Saint-Gaudens"
      },
      {
        value: "Toulouse"
      },
      {
        value: "Grenoble"
      },
      {
        value: "Vénissieux"
      },
      {
        value: "Villeurbanne"
      },
      {
        value: "Chambéry"
      },
      {
        value: "Annemasse"
      },
      {
        value: "Montpellier"
      }
    ];

    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <View>
          <Formik
            initialValues={this.state}
            onSubmit={values => console.log(values, this.state)}
          >
            {props => (
              <View style={styles.form}>
                <TextInput
                  style={styles.title}
                  editable={false}
                  value={"Enregistrement"}
                />
                <TextInput
                  placeholder="Nom de l'utilisateur"
                  style={styles.field}
                  onChangeText={props.handleChange("username")}
                  onBlur={props.handleBlur("username")}
                  value={props.values.username}
                />
                <View style={styles.dropdown}>
                  <Dropdown
                    label="Quelle est votre fabrique Simplon ?"
                    data={fabrik}
                    onChangeText={itemValue => {
                      console.log(itemValue, "dropdown");
                    }}
                  />
                </View>
                <TextInput
                  placeholder="E-mail"
                  style={styles.field}
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                />
                <TextInput
                  placeholder="Mot de passe"
                  style={styles.field}
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
                />
                <TextInput
                  placeholder="Répéter le mot de passe"
                  style={styles.field}
                  secureTextEntry={true}
                  onChangeText={props.handleChange("repeatPassword")}
                  onBlur={props.handleBlur("repeatPassword")}
                  value={props.values.repeatPassword}
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
                    onPress={props.handleSubmit}
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
