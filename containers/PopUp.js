import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PopUp from "../components/filters/PopUp";
import {fetchDataApi, setDatePickedStart, setDatePickedEnd} from '../actions/PopUp';

const mapStateToProps = state => {
  return {
    NbPosts: state.storeStatistiques.NbPosts,
    NbUtilisateurs: state.storeStatistiques.NbUtilisateurs,
    NbResponses: state.storeStatistiques.NbResponses,    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({fetchDataApi, setDatePickedStart, setDatePickedEnd  }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUp);
