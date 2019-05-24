import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import AnwserComponent from "../components/AnwserComponent";
import FooterComponent from "../components/layouts/FooterComponent";
import AnwserFormComponent from "../components/AnwserFormComponent";
import Question from "../containers/Question";
import * as Questions from "../mock/questionsReponses.json"
import HeaderComponent from "../components/layouts/HeaderComponent";
import ScrollToTopButtonComponent from "../components/ScrollToTopButtonComponent";



import { primaryColor, lightGreyColor } from "../helpers/styleGuidelines";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello QuestionScreen",
      showScrollToTop: false,
<<<<<<< HEAD
      connected: true
=======
      connected:true,
      currentQuestion:null,
      navigationIndex: null,
      currentQuestion:null
>>>>>>> dd98d1259c84552349f87775ae1f0ce185ad89b5
    };
    
  }
  componentWillMount(){
    const navigateQuestion = this.props.navigation.getParam("navigateQuestion","no data");
    const state = this.props.navigation.getParam("state", null);
    const index = this.props.navigation.getParam("index","no-data");
    this.setState({navigateByIndex:index});
  }
  componentDidMount(){
   
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Question",
      header: props => <HeaderComponent {...props} title="Simplon-Exchange" />
    };
  };

  onScrollTop = () => {
    this.refs.scrollView.scrollTo({ x: 0, y: 0, animated: true });
  };
  onScroll = event => {
    // Le bouton pour scroller en haut s'affiche après le nombre de pixels suivants:
    const buttonAppearOffset = 100;

    if (event.nativeEvent.contentOffset.y > buttonAppearOffset) {
      // Si le scroll dépasse la limite définie ci-dessus, il faut l'afficher
      this.setState({ showScrollToTop: true });
    } else if (this.state.showScrollToTop) {
      // Autrement, il faut le cacher si il n'est pas déjà caché
      this.setState({ showScrollToTop: false });
    }
  };

  
  navigateByIndex = (index)=> {
    console.log("question Screen",index);
    this.setState({navigationIndex:index});
  }
   
  render() {

    const question = this.props.navigation.getParam("question", "no Data");
    const index = this.props.navigation.getParam("index","no-data");
    //console.log('question.state.params.index',this.props.navigation.state.params);
    
    console.log("this.props.index",index,"this.props");
    
    
    
    //console.log('questionNav', question);

    //console.log('this.propsNav', this.props.navigation);
    
    //console.log('this.state',this.state);
    
    
    const answers = question.answers;
    //console.log('answerss', answers);
    
    const { showScrollToTop } = this.state;
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: "#dee2e6" }} ref="scrollView"
        onScroll={this.onScroll} >

<<<<<<< HEAD
        <QuestionComponent navigation={this.props.navigation} question={question} showContent={true} />
        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <View style={{
              flexDirection: "row",
            }}>
              {/* <Icon name="angle-double-left" type="font-awesome" color="#d6363e"/> */}
              <Text style={{
                fontFamily: "firacode",
                fontSize: 16,
                color: "#d6363e",
                textAlign: "left",
                paddingLeft: 5,
                // marginBottom: 30
              }}
=======
        <Question navigateByIndex={this.navigateByIndex} navigation={this.props.navigation} index={index} question={question} showContent={true} />
        <View style={{padding:15, flexDirection:"row", justifyContent:"space-between"}}>
        {/* <TouchableOpacity > */}
        <TouchableOpacity 
        onPress={() => { this.setState({navigationIndex:--index});console.log("goBackward");
        }}>
          <View  style={{
                flexDirection:"row",
                borderWidth: 2
              }}>
          {/* <Icon name="angle-double-left" type="font-awesome" color="#d6363e"/> */}
          {/* <TouchableOpacity onPress={this.goToNext()}> */}
            <Text style={{
              fontFamily: "firacode", 
              fontSize: 16,
              color: "#d6363e",
              textAlign: "left",
              paddingLeft: 5,
              // marginBottom: 30
            }}
>>>>>>> dd98d1259c84552349f87775ae1f0ce185ad89b5
              >Précédente
            </Text>
            {/* </TouchableOpacity> */}
            </View>
<<<<<<< HEAD
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}>
              <Text style={{
                fontFamily: "firacode",
                fontSize: 16,
                color: "#d6363e",
                textAlign: "right",
                paddingRight: 5
              }}
=======
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {this.setState({navigationIndex:++index});console.log("goForward")}}> 
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
>>>>>>> dd98d1259c84552349f87775ae1f0ce185ad89b5
              >Suivante
            </Text>
              {/* <Icon name="angle-double-right" type="font-awesome" color="#d6363e"/> */}
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "#d6363e"
          }}
        >
          Réponses
        </Text>
        {answers.map(answer => (
          <AnwserComponent key={answer.id} answer={answer} />
        ))}
        {this.state.connected ? <AnwserFormComponent newResponse={this.addResponse} /> :
          <View style={{ paddingTop: 10, paddingLeft: 15, paddingRight: 15 }}>
            <Button title="Connectez vous pour répondre" buttonStyle={{ backgroundColor: "#d6363e" }} />
          </View>}

        <FooterComponent drawerNav={this.props.navigation} />
        {showScrollToTop && (
          <ScrollToTopButtonComponent onPress={this.onScrollTop} />
        )}
      </ScrollView>
    );
  }
  addResponse(newResponse) {
    console.log("TCL: addResponse -> newResponse", newResponse)

  }
  onLoadCallback = () => {
    console.log("loaded");
  };
}

export default QuestionScreen;
