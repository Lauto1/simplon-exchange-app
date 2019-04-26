import React, { Component } from 'react'
import { KeyboardAvoidingView, ScrollView, View, Text, TextInput, Picker, DatePickerAndroid, Button, TouchableOpacity, StyleSheet } from 'react-native';

class BugReportComponent extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            date : ''
        }
    }

    /**
     * Infos : 
     * -Procédure de génération de la date
     */
    setDate(){
        let now = new Date();

        const date =  this.addZero(now.getDate());
        const month = this.addZero(now.getMonth());
        const years = this.addZero(now.getFullYear());
        const hours = this.addZero(now.getHours());
        const minutes = this.addZero(now.getMinutes());

        let formatedDate = date + '/' + month + '/' + years + ' ' + hours + ':' + minutes;
        this.setState({date : formatedDate});
    }

    /**
     * Infos :
     * -Procédure de de formatage de la date
     * @var Integer value : correspond à un jour , un mois , une heure , une minute 
     * inférieur(e)s à 10
     */
    addZero(value)
    {
        if(value < 10) {
            value = '0' + value;
        }
        return value;
    }

    componentDidMount()
    {
        this.setDate();
    }

    render() { 
        return (
            <KeyboardAvoidingView style={styles.card} behavior="padding" enabled keyboardVerticalOffset="10">
                <Text style={styles.title}>Signaler un Bug</Text>
                <View style={styles.line}/>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="mail" style={styles.inputText}/>
                    <TextInput placeholder="date" value={this.state.date} style={styles.inputText}/>
                    <Picker  style={styles.select} placeholder="env">
                        <Picker.Item label="Environnement" enabled="false" color="grey"/>
                        <Picker.Item label="Android" value="android" />
                        <Picker.Item label="Ios" value="ios" />
                    </Picker>
                    <Picker  style={styles.select} >
                        <Picker.Item label="Page" enabled="false" color="grey"/>
                        <Picker.Item label="Page 1" value="page1"/>
                        <Picker.Item label="Page 2" value="page2"/>
                    </Picker>
                    <TextInput multiline = {true} numberOfLines = {4} placeholder="descriptif" style={styles.inputText}/>
                    <TouchableOpacity style={styles.imageUpload}>
                        <Text style={styles.imageUploadText}>AJOUTER UNE IMAGE</Text>
                    </TouchableOpacity>
                    <Button  title="Soumettre"
                        color="#d6363e"
                        accessibilityLabel="Signalisation d'un disfonctionnement" style={styles.submit}/>
                </View>
            </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    card  :{
        height : 'auto',
        width: '90%',
        borderRadius : 3,
        elevation : 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        padding: 8,
        flexDirection : 'column',
        alignItems : 'center'
    },
    title : {
        color : '#d6363e',
        fontSize : 30,
        textAlign : 'left',
        width : '100%',
        marginTop : 10,
    },
    line : {
        backgroundColor :'rgba(0, 0, 0, 0.1)',
        width : '80%',
        height : 1,
        marginTop : 15,
        marginBottom : 20
    },
    inputContainer : {
        width : '100%',
        marginBottom : 20
    },
    inputText : {
        borderWidth : 1,
        borderColor : 'lightgrey',
        paddingLeft : 5, 
        marginBottom : 20
    },
    select : {
        borderColor : 'lightgrey',
        borderBottomWidth : 1
    },
    textArea : {
        padding : 2,
        borderWidth : 2,
        borderColor : 'black',
        borderStyle : 'solid'
    },
    imageUpload : {
        backgroundColor : '#d6363e',
        marginTop : 20,
        marginBottom : 20,
        borderRadius : 2,
        padding : 8,
        flexDirection : 'row',
        justifyContent : 'center'
    },
    imageUploadText : {
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold'
    },
    submit : {
        width: '80%'
    }
});

export default BugReportComponent;