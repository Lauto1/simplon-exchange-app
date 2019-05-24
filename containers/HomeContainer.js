import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";
<<<<<<< HEAD
import { toggleLoader } from '../actions/loader';
import { fetchQuestions, searchQuestions } from "../actions/question";
=======
import { fetchQuestions,searchQuestions,navigateQuestion } from "../actions/question";
>>>>>>> dd98d1259c84552349f87775ae1f0ce185ad89b5


const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
<<<<<<< HEAD
    currentSearch: state.questionReducer.currentSearch,
    isLoaderDisplayed: state.loader.isLoaderDisplayed,
=======
    currentQuestion:state.questionReducer.currentQuestion,
    currentSearch : state.questionReducer.currentSearch
>>>>>>> dd98d1259c84552349f87775ae1f0ce185ad89b5
  };
};

const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    actions: bindActionCreators({ fetchQuestions, searchQuestions, toggleLoader }, dispatch)
=======
    actions: bindActionCreators({ fetchQuestions,searchQuestions,navigateQuestion }, dispatch)
>>>>>>> dd98d1259c84552349f87775ae1f0ce185ad89b5
  };
};
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
export default HomeContainer;
