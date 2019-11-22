import React from 'react';
import style from './Profile.module.scss';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = props => {

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div>

      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}
                        className={style.profile}/>
    </div>
  )
}

export default Profile;
