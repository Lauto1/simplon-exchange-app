import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FooterComponent from "./layouts/FooterComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import QuestionComponent from "./QuestionComponent";
import ScrollToTopButtonComponent from "./ScrollToTopButtonComponent";
import StatsComponent from "./StatsComponent";
import SearchbarComponent from "./SearchbarComponent";
import {
  primaryColor,
  lightGreyColor,
  boldFontFamily,
  whiteColor,
  titleFontSize,
  paragraphFontSize,
  regularFontFamily
} from "../helpers/styleGuidelines";

class HomeComponent extends React.Component {
  state = {
    questions: [],
    showScrollToTop: false,
    showContent: false
  };

  componentDidMount() {
    this.props.actions.fetchQuestions().then(questions => {
      //console.log(questions, "promise");
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
  searchQuestions(terms = null, questions) {
    let filteredQuestions = [];
    if (terms != null && terms != "" && terms.length >= 2) {
      let multipleTerms = terms.split(" ");
      multipleTerms.forEach(term => {
        for (var i = 0; i < questions.length; i++) {
          let whiteSpace = term.length >= 1 && term != " ";
          if (
            (whiteSpace &&
              questions[i].title
                .toLowerCase()
                .toString()
                .includes(term.toLowerCase().toString())) ||
            (whiteSpace &&
              questions[i].content
                .toLowerCase()
                .toString()
                .includes(term.toLowerCase().toString()))
          ) {
            const found = filteredQuestions.some(
              el => el.id === questions[i].id
            );
            questions[i].showContent = true;
            if (!found) filteredQuestions.push(questions[i]);
          }
        }
      });
    } else {
      filteredQuestions = questions.map(question => {
        question.showContent = false;
        return question;
      });
    }
    return filteredQuestions;
  }

  render() {
    const { showScrollToTop } = this.state;
    const questions = this.props.questions;
    const terms = this.props.currentSearch;
    return (
      <View style={styles.view}>
        <ScrollView
          style={styles.contentContainer}
          ref="scrollView"
          onScroll={this.onScroll}
        >
          <View style={styles.welcomeHome}>
            <Text style={styles.welcomeTitle}>
              Bienvenue sur Simplon-Exchange.Help
            </Text>
            <Text style={styles.welcomeHomeText}>
              Tous les Simplonnien.ne.s débutant.e.s font face aux mêmes
              problèmes/bogues/erreurs, mais n'osent pas toujours demander ou ne
              trouvent pas toujours les bonnes réponses. Sois rassuré.e, ici tu
              es libre de poser la question que tu veux, une réponse fiable et
              de confiance te sera faite par un.e autre apprenant.e, un.e
              ancien.ne Simplonien.ne ou un formateur.
            </Text>
            <Text style={styles.welcomeSousTitle}>
              N'attend plus, pose ta question dès maintenant !
            </Text>
            <SearchbarComponent
              searchQuestions={this.props.actions.searchQuestions}
              style={styles.search}
            />
          </View>
          {this.searchQuestions(terms, questions).map(question => (
            <QuestionComponent
              terms={terms}
              navigation={this.props.navigation}
              showContent={question.showContent}
              key={question.id}
              question={question}
            />
          ))}
          <StatsComponent questions={questions} />
          <FooterComponent drawerNav={this.props.navigation} />
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
    backgroundColor: lightGreyColor
  },
  search: {
    marginTop: 15,
    flex: 2
  },
  welcomeHome: {
    backgroundColor: primaryColor,
    padding: 30,
    margin: -2
  },

  welcomeTitle: {
    fontFamily: boldFontFamily,
    fontSize: titleFontSize,
    color: whiteColor,
    alignItems: "center",
    textAlign: "center"
  },
  welcomeHomeText: {
    fontFamily: regularFontFamily,
    textAlign: "center",
    color: whiteColor,
    fontSize: paragraphFontSize
  },
  welcomeSousTitle: {
    fontFamily: boldFontFamily,
    color: whiteColor,
    textAlign: "center",
    marginBottom: 46
  }
});

export default HomeComponent;
