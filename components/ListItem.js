import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements'

class QuestionListItem extends Component {

    render() {
        const question = this.props.question;
        console.log('question',question);
        
        return (
            <TouchableOpacity
                style={{width: '90%', borderRadius: 5}}
                onPress={() => this.props.onPress(question)}

            >
           
           <Card containerStyle={{padding: 0}} >

            <Text style={styles.text}>toto</Text>
            
           </Card>
  


                {/* <View style={styles.wrapper}>
                    <Text style={styles.text}>
                        <Text style={styles.questionIcon}>QuestionListItem</Text>
                    </Text>
                </View> */}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        borderRadius: 5
    }
});

export default QuestionListItem;
