import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Filter from "../components/filters/Filter";
import { getNbPost } from "../actions/statistique";

const mapStateToProps = state => {
  return {
    // NbPosts: state.storeStatistiques.NbPosts,
    // NbUtilisateurs: state.storeStatistiques.NbUtilisateurs,
    // NbReponses: state.storeStatistiques.NbReponses,    
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
)(Filter);