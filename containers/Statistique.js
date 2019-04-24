import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Statistique from "../components/Statistique";
import { getNbPost } from "../actions/statistique";

const mapStateToProps = state => {
  return {
    NbPosts: state.storeStatistiques.NbPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getNbPost }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistique);
