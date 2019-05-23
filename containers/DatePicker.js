import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DatePicker from "../components/filters/DatePicker";
import {fetchDataApi, setDatePickedStart, setDatePickedEnd} from '../actions/popUp';

const mapStateToProps = state => {
  return {
    StartDateFilter: state.storeStatistiques.StartDateFilter,
    EndDateFilter: state.storeStatistiques.EndDateFilter,
    NbResponses: state.storeStatistiques.NbResponses,    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({fetchDataApi, setDatePickedStart, setDatePickedEnd  }, dispatch)  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);
