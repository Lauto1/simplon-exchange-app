import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

class ProfileComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }

    componentWillMount()
    {
        let user = this.props.props.user;
        this.props.props.actions.getUserProfile(26);
        this.setState({username : user.name, email : user.email, password : user.password });
    }

    updateUser()
    {
        console.log('update',this.state);
    }

    render()
    {
        console.log(this.props.props.user);
        return (
            <View>
                <Text>Nom</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(text) => this.setState({username : text})}
                value={this.state.username}/>
                <Text>Email</Text>
                <TextInput  
                style={styles.input}
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}/>
                <Text>Mot de passe</Text>
                <TextInput  
                style={styles.input}
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}/>
                <TouchableOpacity onPress={()=> this.updateUser()}>
                    <Text>Enregistrer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ProfileComponent;

const styles = StyleSheet.create({
    input : {
        borderBottomWidth : 1,
        borderBottomColor : 'lightgrey'
    }
});