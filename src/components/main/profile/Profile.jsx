import React from 'react';
import style from './Profile.module.scss';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = props => {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}
                        className={style.profile}/>
    </div>
  )
}

export default Profile;
