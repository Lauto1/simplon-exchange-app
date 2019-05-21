import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";
import { fetchQuestions,searchQuestions } from "../actions/question";


const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    currentSearch : state.questionReducer.currentSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ fetchQuestions,searchQuestions }, dispatch)
  };
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent);
export default  HomeContainer;
