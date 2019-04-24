import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Question from "../components/Question";
import { getExample } from "../actions/example";

const mapStateToProps = state => {
    return {
        example: state.example.getExample
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ getExample }, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
