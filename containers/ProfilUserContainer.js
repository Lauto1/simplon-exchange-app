import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Profil from "../components/ProfilUser";
import { getProfileUser } from "../actions/profileUserAction";

const mapStateToProps = state => {
  return {
    getProfile:getProfileUser
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

