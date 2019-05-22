import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";
import { fetchQuestions,searchQuestions,navigateQuestion } from "../actions/question";


const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    currentQuestion:state.questionReducer.currentQuestion,
    currentSearch : state.questionReducer.currentSearch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ fetchQuestions,searchQuestions,navigateQuestion }, dispatch)
  };
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent);
export default  HomeContainer;
