import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Connexion from "../components/Connexion";
import { setStorage } from "../actions/userStorage";


const mapStateToProps = state => {
  return {
    // NbPosts: state.storeStatistiques.NbPosts,
    // NbUtilisateurs: state.storeStatistiques.NbUtilisateurs,
    // NbResponses: state.storeStatistiques.NbResponses,  
    storage: state.userStorage.userStorage  
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ setStorage }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connexion);