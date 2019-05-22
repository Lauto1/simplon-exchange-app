import React from "react";
import QuestionFormComponent from "../components/QuestionFormComponent";
import HeaderComponent from "../components/layouts/HeaderComponent";
import { ScrollView } from "react-native";

class AskQuestionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HeaderComponent {...props} />,
      drawerLabel: 'Posez une question'
    };
  };

  render() {
    return  <ScrollView contentContainerStyle={{ backgroundColor: "#dee2e6" }}>
              <QuestionFormComponent />
            </ScrollView>

  }
}

export default AskQuestionScreen;
