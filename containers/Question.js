import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import QuestionComponent from "../components/QuestionComponent";
import { navigateQuestion,setCurrentQuestion } from "../actions/question";


const mapStateToProps = state => {
  return {
    currentQuestion:state.questionReducer.currentQuestion,
    index : state.questionReducer.indexQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ navigateQuestion,setCurrentQuestion }, dispatch)
  };
};
const Question = connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionComponent);
export default  Question;
