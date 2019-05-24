import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Profil from "../components/ProfilUser";
import { getProfileUser } from "../actions/profileUserAction";

const mapStateToProps = state => {
  return {action:state.profileUserReducer}
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getProfileUser }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profil);

