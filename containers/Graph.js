import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Graph from "../components/Graph";
import { getNbPost } from "../actions/statistique";

const mapStateToProps = state => {
  return {
    NbPosts: state.storeStatistiques.NbPosts,
    NbUtilisateurs: state.storeStatistiques.NbUtilisateurs,
    NbResponses: state.storeStatistiques.NbResponses,    
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
)(Graph);