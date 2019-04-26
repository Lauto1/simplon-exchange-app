import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Vote extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            vote_score : 0,
            voted : false
        }
    }

    handleVote(type){
        if(type == '+') {
            this.setState({vote_score : this.state.vote_score + 1});
            console.log(this.state);
            //call action upvote
        }else if(type == '-') {
            this.setState({vote_score : this.state.vote_score - 1});
            //call action downvote
            console.log(this.state);
        }
    }

    render()
    {
        return(
            <TouchableOpacity onPress={() => {this.handleVote(this.props.type)}}>
                <Text style={{fontSize : 50}}>{this.props.type}</Text>
            </TouchableOpacity>
        );
    }
}

export default Vote;
