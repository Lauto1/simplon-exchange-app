import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Votes from "../components/VoteComponent";
import { setStorage } from "../actions/userStorage";

const mapStateToProps = state => {
  return { 
    storage: state.userStorage.userStorage  
   };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ setStorage }, dispatch)
  };
};

const Vote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Votes);
export default Vote;