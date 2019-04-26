import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import QuestionComponent from "../components/QuestionComponent";
import AnwserComponent from "../components/AnwserComponent";
import FooterComponent from "../components/layouts/FooterComponent";
import { Icon } from "react-native-elements";



class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello QuestionScreen"
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Question"
    };
  };

  render() {
    const question = this.props.navigation.getParam("question", "no Data")
    const answers = question.answers

    return (
      <ScrollView contentContainerStyle={{ backgroundColor: "#dee2e6"}} >

        <QuestionComponent navigation={this.props.navigation} question={question} showContent={true} />
        <View style={{padding:15}}>
        <TouchableOpacity>
          <View  style={{
                flexDirection:"row"
              }}>
          <Icon name="angle-double-left" type="font-awesome" color="#d6363e"/>
            <Text style={{
              fontFamily: "firacode", 
              fontSize: 16,
              color: "#d6363e",
              textAlign: "left",
              paddingLeft: 5,
              marginBottom: 30
            }}
              >Question Précédente
            </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View  style={{
                flexDirection:"row",
                justifyContent:"flex-end"
              }}> 
            <Text style={{ 
              fontFamily: "firacode", 
              fontSize: 16,
              color: "#d6363e",
              textAlign: "right",
              paddingRight: 5
             }}
              >Question Suivante
            </Text>
            <Icon name="angle-double-right" type="font-awesome" color="#d6363e"/>
          </View> 
        </TouchableOpacity>
        </View>
        <Text style={{
          marginTop:10,
          marginBottom: 10,
          marginLeft: 40,
          fontSize: 20,
          fontWeight: "bold",
          color: "#d6363e"
        }}>Réponses</Text>
        {answers.map(answer => (
          <AnwserComponent key={answer.id} answer={answer} />
        ))}
      <FooterComponent/>
      </ScrollView>
    );
  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

export default QuestionScreen;
