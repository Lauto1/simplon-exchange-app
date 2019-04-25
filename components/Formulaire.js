import React, { Component } from 'react';
import { Formik } from 'formik';

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
    verificationUtilisateur(obj){
        const regexEmail = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.exec(obj.mail)){
            if(obj.image !== ''){
                this.setState({
                    mail:obj.mail,
                    environnement:obj.environnement,
                    page:obj.page,
                    categories:obj.categories,
                    date:obj.date,
                    descriptif:obj.descriptif,
                    image:obj.image
                })
            }else{
                this.setState({
                    mail:obj.mail,
                    environnement:obj.environnement,
                    page:obj.page,
                    categories:obj.categories,
                    date:obj.date,
                    descriptif:obj.descriptif,
                    image:''
                })
            }
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
                onSubmit = { 
                    (values, actions) => {
                        setTimeout( () => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);
                    }
                }
            />
        )
    }
}