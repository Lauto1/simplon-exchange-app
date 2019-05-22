import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import {AsyncStorage} from 'react-native';
import { CheckBox } from "react-native-elements";
import {
  lightGreyColor,
  primaryColor,
  titleFontSize,
  whiteColor
} from "../helpers/styleGuidelines";

export default class Connexion extends React.Component {

    _API = "http://dev.simplon-exchange.help/api/login";
    
    /**
     * @param {any} props
     */
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checked: false
        }
    }

    /*
    * Set l'id et le token de l'utilisateurs dans le storage
    */
    createStorage(data) {
        AsyncStorage.setItem('user_informations', JSON.stringify(data), () => {
            return true;
        })
    }

    /*
    * Récupère l'id et le token de l'utilisateurs dans le storage
    */
    getStorage() {
        AsyncStorage.getItem('user_informations', (err, result) => {
            console.log("Contenu storage :",JSON.parse(result));
        });
    }

    /*
    * Permet à l'utilisateur de se connecter
    */
    handleSubmit(values){
        fetch(this._API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.createStorage(data);
            this.getStorage();
        })
        .catch((error) => {
            console.error(error)
        });
    }

    /*
    * Redirige vers un formulaire dédié 
    */
    passwordForgotten(){
        // TODO
    }


    render() {
        return (
            <View style={{ backgroundColor: '#f3f3f3', flex: 1 }}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => this.handleSubmit(values)}
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
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                            />
                            <TextInput
                                placeholder="Mot de passe"
                                style={styles.field}
                                secureTextEntry={true}
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                            />
                            <View style={styles.button}>
                                <Button
                                    color="#D6363E"
                                    onPress={props.handleSubmit} 
                                    title="Connexion"
                                />
                            </View>
                            <View style={styles.button}>
                                <Button
                                    title="Mot de passe oublié ?"
                                    color="#2f3239"
                                    onPress={() => this.passwordForgotten()} 
                                />
                            </View>
                            <View style={{backgroundColor: "white"}}>
                                <CheckBox
                                    style={{width: "100%"}}
                                    title='Se rappeler de moi'
                                    textStyle={styles.checkboxText}
                                    checkedColor="#D6363E"
                                    checked={this.state.checked}
                                    onPress={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
          )}
    }

// @ts-ignore
const styles = StyleSheet.create({

    checkboxText: {
      color: '#D6363E'
    },

  titleText: {
    color: primaryColor,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
    fontWeight: "500",
    fontSize: titleFontSize,
    borderBottomColor: lightGreyColor,
    borderBottomWidth: 1,
    paddingBottom: 10
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
