import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQuestions } from '../actions/question';
import { searchQuestions } from '../actions/question';
import { toggleLoader } from "../actions/loader";

const mapStateToProps = state => {
    return {
        addQuestions: state.questionReducer.addQuestions,
        searchQuestions: state.questionReducer.searchQuestions,
        isLoaderDisplayed: state.loader.isLoaderDisplayed,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ toggleLoader, addQuestions, searchQuestions }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question)