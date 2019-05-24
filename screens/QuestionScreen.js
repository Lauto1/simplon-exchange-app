import React from "react";
import { ScrollView, Text, TouchableOpacity, View,StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import AnwserComponent from "../components/AnwserComponent";
import FooterComponent from "../components/layouts/FooterComponent";
import AnwserFormComponent from "../components/AnwserFormComponent";
import Question from "../containers/Question";
import * as Questions from "../mock/questionsReponses.json"
import HeaderComponent from "../components/layouts/HeaderComponent";
import ScrollToTopButtonComponent from "../components/ScrollToTopButtonComponent";



import { primaryColor, lightGreyColor,titleFontSize,regularFontFamily,subtitleFontSize } from "../helpers/styleGuidelines";

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "hello QuestionScreen",
      showScrollToTop: false,
      connected: true,
      currentQuestion: null,
      navigationIndex: null,
      currentQuestion: null
    };

  }
  componentWillMount() {
    const navigateQuestion = this.props.navigation.getParam("navigateQuestion", "no data");
    const state = this.props.navigation.getParam("state", null);
    const index = this.props.navigation.getParam("index", "no-data");
    this.setState({ navigateByIndex: index });
  }
  componentDidMount() {

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


  navigateByIndex = (index) => {
    console.log("question Screen", index);
    this.setState({ navigationIndex: index });
  }

  render() {
    
    const question = this.props.navigation.getParam("question", "no Data");
    const index = this.props.navigation.getParam("index", "no-data");
    const answers = question.answers;
    const { showScrollToTop } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.scrollView} ref="scrollView"
        onScroll={this.onScroll} scrollEventThrottle="16">

        <Question navigateByIndex={this.navigateByIndex} navigation={this.props.navigation} index={index} question={question} showContent={true} />
        <View style={styles.navigationContainer}>
          {/* <TouchableOpacity > */}
          <TouchableOpacity
            onPress={() => {
              console.log("goBackward");
            }}>
            <View style={{
              flexDirection: "row",
            }}>
              {/* <Icon name="angle-double-left" type="font-awesome" color="#d6363e"/> */}
              {/* <TouchableOpacity onPress={this.goToNext()}> */}
              <Text style={styles.navigationText}
              >Précédente
            </Text>
              {/* </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log("goForward") }}>
            <View style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}>
              <Text style={styles.navigationText}
              >Suivante
            </Text>
              {/* <Icon name="angle-double-right" type="font-awesome" color="#d6363e"/> */}
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.responseTitle}
        >
          Réponses
        </Text>
        {answers.map(answer => (
          <AnwserComponent key={answer.id} answer={answer} />
        ))}
        {this.state.connected ? <AnwserFormComponent newResponse={this.addResponse} /> :
          <View style={styles.connectionButtonContainer}>
            <Button title="Connectez vous pour répondre" buttonStyle={styles.button} />
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
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: lightGreyColor
  },

  connectionButtonContainer: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,

  },
  button: {
    backgroundColor: primaryColor
  },
  navigationContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  responseTitle: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontSize: titleFontSize,
    fontWeight: "bold",
    color: primaryColor
  },
  navigationText: {
    fontFamily: regularFontFamily,
    fontSize: subtitleFontSize,
    color: primaryColor,
    textAlign: "right",
    paddingRight: 5
  }
})

export default QuestionScreen;
