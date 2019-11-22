import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {reviewUser, setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.reviewUser(userId)
  }

  render() {
    return <Profile {...this.props}
                    profile={this.props.profile}
                    isAuth={this.props.isAuth}/>
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile, reviewUser
})(WithURLDataContainerComponent);
