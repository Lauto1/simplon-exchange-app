import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DatePicker from "../components/filters/DatePicker";
import {setDatePickedStart, setDatePickedEnd} from '../actions/PopUp';


const mapStateToProps = state => {
  return {
    StartDateFilter: state.storeStatistiques.StartDateFilter,
    EndDateFilter: state.storeStatistiques.EndDateFilter,
    NbResponses: state.storeStatistiques.NbResponses,    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ setDatePickedStart, setDatePickedEnd }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);