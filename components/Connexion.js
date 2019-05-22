import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { CheckBox } from "react-native-elements";

export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checked: false
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "#f3f3f3", flex: 1 }}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}
        >
          {props => (
            <View style={styles.form}>
              <TextInput
                style={styles.titleText}
                editable={false}
                value={"Se connecter"}
              />
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
              <CheckBox
                title="Se rappeler de moi"
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
              />
              <View style={styles.button}>
                <Button
                  color="#D6363E"
                  onPress={props.handleSubmit}
                  title="Connexion"
                />
                <Button
                  title="Mot de passe oublié ?"
                  color="#2f3239"
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleText: {
    color: "#D6363E",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
    fontWeight: "500",
    fontSize: 28,
    borderBottomColor: "rgba(0,0,0,.1)",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  form: {
    marginTop: 75,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "rgba(0,0,0,.125)",
    borderWidth: 1
  },
  field: {
    borderColor: "#000000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 25,
    width: "100%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    marginTop: 20,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5
  }
});
