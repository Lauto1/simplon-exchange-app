import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";
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
const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeComponent);
export default  HomeContainer;
