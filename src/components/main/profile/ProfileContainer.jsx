import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {reviewUser, setUserProfile} from "../../../redux/profile-reducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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
});

export default compose(
  connect(mapStateToProps, {setUserProfile, reviewUser}), withRouter, withAuthRedirect)(ProfileContainer);
