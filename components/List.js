import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, Text, Button, StyleSheet, RefreshControl, Linking} from "react-native";
import QuestionListItem from './ListItem';


class QuestionList extends Component {

    constructor(props){
        super(props);

    }


    renderQuestionItem = () => {
      console.log("this.props.questionList", this.props.questionList);

        return this.props.questionList.map((item, id) => {
            return <QuestionListItem
                        key={id}
                        question={item}
                        onPress={(question) => this.props.onQuotePress(question)}
            />
        })
        
    };


    fetchQuestion = () => {
        this.props.actions.fetchQuestion();
    };

    keyExtractor = (item, index) => {
        return String(index);
    };

    render() {
        return (
            <ScrollView
                style={styles.wrapper}
                contentContainerStyle={{flexDirection: 'column', alignItems: 'center'}}

            >

                {this.renderQuestionItem()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1abc9c',
        paddingTop: 24
    }
});

export default QuestionList;
