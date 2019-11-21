import React from 'react';
import Preloader from "../../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://picsum.photos/536/354"/>
      </div>
      <div>
        <img src={props.profile.photos.large}
             className={classes.photo}/>
      </div>
      <div>
        <h2>{props.profile.fullName}</h2>
        <hr/>
        <h3>{props.profile.aboutMe}</h3>
        <hr/>
        <p>
          {props.profile.lookingForAJob
            ? `у меня есть работа`
            : `безработный` }
        </p>
        <p>
            {props.profile.lookingForAJobDescription}
        </p>
      </div>
      <hr/>
    </div>
  )
};

export default ProfileInfo;
