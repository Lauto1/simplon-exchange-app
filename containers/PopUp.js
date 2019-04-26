import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PopUp from "../components/filters/PopUp";
import {fetchDataApi} from '../actions/popUp';

const mapStateToProps = state => {
  return {
    NbPosts: state.storeStatistiques.NbPosts,
    NbUtilisateurs: state.storeStatistiques.NbUtilisateurs,
    NbResponses: state.storeStatistiques.NbResponses,    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({fetchDataApi }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUp);
