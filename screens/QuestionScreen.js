import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import AnwserComponent from "../components/AnwserComponent";
import FooterComponent from "../components/layouts/FooterComponent";
import AnwserFormComponent from "../components/AnwserFormComponent";
import QuestionComponent from "../components/QuestionComponent";
import HeaderComponent from "../components/layouts/HeaderComponent";
import ScrollToTopButtonComponent from "../components/ScrollToTopButtonComponent";



import { primaryColor, lightGreyColor } from "../helpers/styleGuidelines";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello QuestionScreen",
      showScrollToTop: false,
      connected:true
    };
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

  render() {
    const question = this.props.navigation.getParam("question", "no Data");
    const answers = question.answers;
    const { showScrollToTop } = this.state;
    return (
      <ScrollView contentContainerStyle={{ backgroundColor: "#dee2e6" }} ref="scrollView"
        onScroll={this.onScroll} >

        <QuestionComponent navigation={this.props.navigation} question={question} showContent={true} />
        <View style={{padding:15, flexDirection:"row", justifyContent:"space-between"}}>
        <TouchableOpacity>
          <View  style={{
                flexDirection:"row",
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
              >Précédente
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
        {this.state.connected ? <AnwserFormComponent newResponse={this.addResponse}/> : 
        <View style={{ paddingTop:10, paddingLeft: 15, paddingRight: 15 }}>
          <Button title="Connectez vous pour répondre" buttonStyle={{ backgroundColor: "#d6363e"}} />
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
