import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";
import { toggleLoader } from '../actions/loader';
import { fetchQuestions, searchQuestions } from "../actions/question";


const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    currentSearch: state.questionReducer.currentSearch,
    isLoaderDisplayed: state.loader.isLoaderDisplayed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ fetchQuestions, searchQuestions, toggleLoader }, dispatch)
  };
};
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
export default HomeContainer;
