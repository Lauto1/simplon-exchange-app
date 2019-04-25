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
import Headernav from "../components/layouts/header";
import ScrollToTopButton from "./ScrollToTopButton";

const QUESTIONS = [
  {
    id: "01",
    title: "Question 1 à propos de ",
    date: "09/10/2018",
    author: "Jean-Michel",
    content: "Ici gît le corps de ma question 1",
    upvote: 0,
    answers: [
      {
        id: "6",
        author: "Marie-Béatrice",
        karma: 0,
        content: "La super réponse de Marie-Béatrice"
      },
      {
        id: "7",
        author: "Marie-Béatrice",
        karma: 0,
        content: "La nouvelle réponse de Marie-Béatrice"
      },
      {
        id: "9",
        author: "Jean-Michel",
        karma: 0,
        content: "La réponse de Jean-Michel à Marie-Béatrice"
      },
      {
        id: "19",
        author: "Marie-Béatrice",
        karma: 0,
        content: "La réponse de Marie-Béatrice à Jean-Michel"
      },
      {
        id: "109",
        author: "Al Capone",
        karma: 90,
        content: "Le dernier mot est donné par Al Capone"
      }
    ],
    factory: "Villeurbanne",
    tag: "php"
  },
  {
    id: "02",
    title: "Question 2 à propos de ",
    date: "09/11/2018",
    author: "Thor",
    content: "Ici est le corps de ma question 2",
    upvote: 3,
    answers: [
      {
        id: "555",
        author: "JCVD",
        karma: 7,
        content: "La super réponse de JCVD"
      }
    ],
    factory: "Vénissieux",
    tag: "mysql"
  },
  {
    id: "03",
    title: "Question 3 à propos de ",
    date: "05/11/2016",
    author: "Garcimore",
    content: "Ici est le corps de ma question 3",
    upvote: 2,
    answers: [
      {
        id: "666",
        author: "Le pape",
        karma: 7,
        content: "La super réponse du Pape"
      }
    ],
    factory: "Roanne",
    tag: "css"
  },
  {
    id: "04",
    title: "Question 4 à propos de ",
    date: "05/04/2017",
    author: "Casimir",
    content: "Ici est le texte de la question 4",
    upvote: 0,
    answers: [
      {
        id: "11",
        author: "Messi",
        karma: 77,
        content: "La super réponse de Messi"
      }
    ],
    factory: "Montpellier",
    tag: "Ruby"
  },
  {
    id: "05",
    title: "Question 5 à propos de ",
    date: "05/04/2017",
    author: "Casimir",
    content: "Ici est le texte de la question 5",
    upvote: 0,
    answers: [
      {
        id: "55",
        author: "Messi",
        karma: 77,
        content: "La super réponse de Messi"
      },
      {
        id: "999",
        author: "Le Messie",
        karma: 888,
        content: "La super réponse du Messie"
      }
    ],
    factory: "Montpellier",
    tag: "Ruby"
  },
  {
    id: "06",
    title: "Question 6 à propos de ",
    date: "05/04/2017",
    author: "Casimir",
    content: "Ici est le texte de la question 6",
    upvote: 0,
    answers: [
      {
        id: "55",
        author: "Messi",
        karma: 77,
        content: "La super réponse de Messi"
      },
      {
        id: "999",
        author: "Le Messie",
        karma: 888,
        content: "La super réponse du Messie"
      }
    ],
    factory: "Montpellier",
    tag: "Ruby"
  },
  {
    id: "07",
    title: "Question 7 à propos de ",
    date: "05/04/2017",
    author: "Casimir",
    content: "Ici est le texte de la question 7",
    upvote: 0,
    answers: [
      {
        id: "55",
        author: "Messi",
        karma: 77,
        content: "La super réponse de Messi"
      },
      {
        id: "999",
        author: "Le Messie",
        karma: 888,
        content: "La super réponse du Messie"
      }
    ],
    factory: "Montpellier",
    tag: "Ruby"
  },
  {
    id: "08",
    title: "Question 8 à propos de ",
    date: "05/04/2017",
    author: "Casimir",
    content: "Ici est le texte de la question 8",
    upvote: 0,
    answers: [
      {
        id: "55",
        author: "Messi",
        karma: 77,
        content: "La super réponse de Messi"
      },
      {
        id: "999",
        author: "Le Messie",
        karma: 888,
        content: "La super réponse du Messie"
      }
    ],
    factory: "Montpellier",
    tag: "Ruby"
  }
];

class HomeComponent extends React.Component {
  state = {
    questions: [],
    showScrollToTop: false
  };

  componentDidMount() {
    // Il faudra récupérer les questions via l'API quand elle sera prête, par exemple:
    // fetch('/api/questions')
    //   .then(response => response.json())
    //   .then(questions => this.setState({ questions }));
    //
    // Pour l'instant, on fait semblant que les questions prennent 1 second à arriver
    setTimeout(() => {
      this.setState({ questions: QUESTIONS });
    }, 1000);
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
    const { questions, showScrollToTop } = this.state;

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
