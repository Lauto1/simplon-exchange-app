import React, { Component } from 'react';
import { Formik } from 'formik';
import { MailComposer } from 'expo';
import { View,TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class Formulaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            mail:'',
            environnement:'',
            page:'',
            date:'',
            categories:'',
            descriptif:'',
            image:''
        }
    }
    async sendMail(obj){
        MailComposer.composeAsync({
            recipients:[obj.mail],
            subject:obj.categories,
            body:
                'Mail : '+obj.mail+'\n'+
                'Environnement : '+obj.environnement+'\n'+
                'Page : '+obj.page+'\n'+
                'Date : '+obj.date+'\n'+
                'Catégories : '+obj.categories+'\n'+
                'Descriptif : '+obj.descriptif+'\n'+
                'Image : '+obj.image
        });
    }
    verificationUtilisateur(){
        const regexEmail = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.exec(this.state.mail)){
            if(this.state.image !== ''){
                this.setState({
                    mail:this.state.mail,
                    environnement:this.state.environnement,
                    page:this.state.page,
                    categories:this.state.categories,
                    date:this.state.date,
                    descriptif:this.state.descriptif,
                    image:this.state.image
                })
                return this.sendMail(this.state);
            }else{
                this.setState({
                    mail:this.state.mail,
                    environnement:this.state.environnement,
                    page:this.state.page,
                    categories:this.state.categories,
                    date:this.state.date,
                    descriptif:this.state.descriptif,
                    image:''
                })
                return this.sendMail(this.state);
            }
        }else{
            console.error('Votre email doit être valide');
        }
    }
    render(){
        return (
            <Formik
                initialValues = {
                    { 
                        mail: this.state.mail,
                        environnement:this.state.environnement,
                        page:this.state.page,
                        date:this.state.date,
                        categories:this.state.categories,
                        descriptif:this.state.descriptif,
                        image:this.state.image
                    }
                }
                render={()=>
                    <View>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
                            placeholder="E-mail"
                            onChangeText={(text)=>this.setState({mail:text})}
                        />
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Environnement"
                            onChangeText={(text)=>this.setState({environnement:text})}
                        />
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Page"
                            onChangeText={(text)=>this.setState({page:text})}
                        />
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Catégories" 
                            onChangeText={(text)=>this.setState({categories:text})}
                        />
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Date" 
                            onChangeText={(text)=>this.setState({date:text})}
                        />
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Descriptif" 
                            onChangeText={(text)=>this.setState({descriptif:text})}
                        />
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Image" 
                            onChangeText={(text)=>this.setState({image:text})}
                        />
                        <Button 
                            title="Envoi Email"
                            onPress =
                            {
                                ()=>this.verificationUtilisateur()
                            }
                        />
                    </View>
                }
            />
        )
    }
}


Formulaire.propTypes = {
    mail: PropTypes.string.isRequired,
    environnement: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    descriptif: PropTypes.string.isRequired,
    image: PropTypes.string
}