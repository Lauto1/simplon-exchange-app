import React from 'react';
import { Button, TextInput, View, Text, StyleSheet, CheckBox } from 'react-native';
import { Formik } from 'formik';


export default class Connexion extends React.Component {
    render() {
        return (
            <View>
                <Text>My Form</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => console.log(values)}
                >
                    {props => (
                        <View>
                            <TextInput
                                placeholder="Email"
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
                            <CheckBox
                                center
                                title='Click Here'
                            />
                            <Button
                                style={styles.button}
                                onPress={props.handleSubmit} 
                                title="Connexion" 
                            />
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    field: {
        borderColor: "#000000",
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: 50,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto"
    }
})