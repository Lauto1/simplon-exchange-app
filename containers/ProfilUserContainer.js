import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Profil from "../components/ProfilUser";
import {  } from "../actions/statistique";

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({  }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profil);

