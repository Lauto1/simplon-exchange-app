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

    componentDidMount()
    {
        console.log('porooooooooops',this.props);
    }

    updateUser()
    {
        console.log(this.state);
    }

    render()
    {
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