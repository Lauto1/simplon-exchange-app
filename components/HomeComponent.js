import React from "react";
import {
  StyleSheet,
  Text,
  Modal,
  View,
  ScrollView,
  Alert,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
  Linking
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Question from "../components/Question";
import Searchbar from "../components/Searchbar";
import Headernav from "./layouts/HeaderComponent";
import ScrollToTopButton from "./ScrollToTopButton";
import FooterComponent from "../components/layouts/Footer"

class HomeComponent extends React.Component {
  state = {
    questions: [],
    showScrollToTop: false
  };

  componentDidMount() {
      this.props.actions.fetchQuestions().then(questions =>{
        console.log(questions, "promise");
      }
      )
      
    // Il faudra récupérer les questions via l'API quand elle sera prête, par exemple:
    // fetch('/api/questions')
    //   .then(response => response.json())
    //   .then(questions => this.setState({ questions }));
    //
    // Pour l'instant, on fait semblant que les questions prennent 1 second à arriver
    // setTimeout(() => {
    //   this.setState({ questions: QUESTIONS });
    // }, 1000);
  }

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
    const {  showScrollToTop } = this.state;
    const  questions  = this.props.questions;
    return (
      <View style={styles.view}>
        <Headernav drawerNav={this.props.navigation} title="Accueil"/>
        <Searchbar style={styles.search} />
        <ScrollView
          style={styles.contentContainer}
          ref="scrollView"
          onScroll={this.onScroll}
        >
          {questions.map(question => (
            <Question navigation={this.props.navigation}  key={question.id} question={question} />
          ))}
          <FooterComponent/>
        </ScrollView>
        {showScrollToTop && <ScrollToTopButton onPress={this.onScrollTop} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },
  view: {
    flex: 1,
    backgroundColor: "#dee2e6"
  },
  search: {
    marginTop: 20
  }
});

export default HomeComponent;
