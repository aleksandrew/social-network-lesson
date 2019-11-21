import React from 'react';
import styles from "./user.module.css";
import userPhoto from "../../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios/index";

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
              <span className={props.currentPage === page && styles.selectedPages}
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
                         className={styles.userPhoto}/>
                  </NavLink>
                </div>
                <div>{user.followed
                  ? <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${user.id}`, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "33411f99-ee9e-4573-b024-1b6268708213"
                      }
                    })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                      });

                    props.unfollow(user.id)
                  }}>Unfollow</button>
                  : <button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "33411f99-ee9e-4573-b024-1b6268708213"
                      }
                    })
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });

                    props.follow(user.id)
                  }}>Follow</button>}
                 </div>
              </span>
              <span>
                <span>
                  <h2>{user.name}</h2>
                  <p>{user.status}</p>
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
