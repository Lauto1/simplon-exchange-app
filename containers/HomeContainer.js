import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";
import { fetchQuestions,searchQuestions,getQuestion } from "../actions/question";


const mapStateToProps = state => {
  return {
    questions: state.questionReducer.questions,
    currentQuestion:state.questionReducer.currentQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ fetchQuestions,searchQuestions,getQuestion }, dispatch)
  };
};
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent);
export default  HomeContainer;
