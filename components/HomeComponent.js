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
import QuestionComponent from "./QuestionComponent";
import SearchbarComponent from "./SearchbarComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import ScrollToTopButtonComponent from "./ScrollToTopButtonComponent";
import FooterComponent from "./layouts/FooterComponent";

class HomeComponent extends React.Component {
  state = {
    questions: [],
    showScrollToTop: false
  };

  componentDidMount() {
    this.props.actions.fetchQuestions().then(questions => {
      console.log(questions, "promise");
    });

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
    const { showScrollToTop } = this.state;
    const questions = this.props.questions;
    return (
      <View style={styles.view}>
        <HeaderComponent
          drawerNav={this.props.navigation}
          title="Simplon-Exchange.Help"
        />
        <View style={styles.welcomeHome}>
            <Text style={styles.welcomeTitle}>
              Bienvenue sur Simplon-Exchange.Help
            </Text>
            <Text style={styles.welcomeHomeText}>
                Tous les Simplonnien.ne.s débutant.e.s font face aux mêmes problèmes/bogues/erreurs, mais n'osent pas toujours demander ou ne trouvent pas toujours les bonnes réponses.
                Sois rassuré.e, ici tu es libre de poser la question que tu veux, une réponse fiable et de confiance te sera faite par un.e autre apprenant.e, un.e ancien.ne Simplonien.ne ou un formateur.     
            </Text>
            <Text style={styles.welcomeSousTitle}>N'attend plus, pose ta question dès maintenant !</Text>
            <SearchbarComponent style={styles.search} />
        </View>
        <ScrollView
          style={styles.contentContainer}
          ref="scrollView"
          onScroll={this.onScroll}
        >
          {questions.map(question => (
            <QuestionComponent
              navigation={this.props.navigation}
              showContent={false}
              key={question.id}
              question={question}
            />
          ))}
          <FooterComponent />
        </ScrollView>
        {showScrollToTop && (
          <ScrollToTopButtonComponent onPress={this.onScrollTop} />
        )}
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
  },
  welcomeHome: {
    backgroundColor:"#d7403e",
    padding: 48,
    margin: -2,
  },
  welcomeTitle: {
    fontFamily: "firacode",
    fontSize: 20,
    color: "#ffffff",
    alignItems: "center",
    textAlign: "center"
  },
  welcomeHomeText: {
    fontSize: 12,
    color: "#ffffff",
  
  },
  welcomeSousTitle: {
    fontFamily: "firacode",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 46,
  }
});

export default HomeComponent;
