import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {
  return (
    <div>

      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}
                        className={classes.profile}/>
    </div>
  )
}

export default Profile;
