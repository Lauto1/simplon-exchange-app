import ProfileScreen from './../screens/ProfileScreen';
import { connect } from 'react-redux';
import { updateUserData, getUserProfile } from './../actions/user';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {user : state.userProfile};
}

const mapDispatchToProps = dispatch => {
        return {
          actions: bindActionCreators({ updateUserData, getUserProfile }, dispatch)
        };
};

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileScreen);

export default  ProfileContainer;