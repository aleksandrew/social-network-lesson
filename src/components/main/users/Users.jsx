import React from 'react';
import style from "./user.module.scss";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {
          pages.map(page => {
            return (
              <span className={`${style.pages} ${props.currentPage === page && style.selectedPages}`}
                    onClick={() => props.onPageChanged(page)}>
                {page}
              </span>
            )
          })
        }
      </div>
      {
        props.users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small != null
                      ? user.photos.small
                      : userPhoto}
                         className={style.userPhoto}/>
                  </NavLink>
                </div>
                <div>
                  {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => {props.unfollow(user.id)}}>
                      Unfollow
                    </button>

                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => {props.follow(user.id)}}>
                      Follow
                    </button>
                  }
                 </div>
              </span>
              <span>
                <span>
                  <h2 className={style.user}>{user.name}</h2>
                  <p className={style.user}>{user.status}</p>
                </span>
               </span>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
};

export default Users;
