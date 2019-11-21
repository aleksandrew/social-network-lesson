import React from 'react';
import classes from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <img
        src="https://s2.logaster.com/static/v3/img/products/logo.png"
        className={classes.header__img}/>

      <div className={classes.loginBlock}>
        {props.isAuth
          ? props.login
          : <NavLink className={classes.login}
                     to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;
