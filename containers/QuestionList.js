import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import QuestionList from '../components/List';
import {fetchQuestion} from '../actions/question';

const mapStateToProps = state => {
    return {
        questionList: state.question.questionList,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchQuestion}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
