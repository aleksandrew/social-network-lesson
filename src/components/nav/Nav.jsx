import React from 'react';
import style from './Nav.module.scss';
import {NavLink, withRouter} from "react-router-dom";

class Nav extends React.Component {
  getNavLinkClass = path => {
    return window.location.pathname === path ? style.active : '';
  };

  render() {
    return (
      <nav className={style.nav}>
        <ul>
          <li className={`${style.elem} ${this.getNavLinkClass("/profile")}`}>
            <NavLink className={style.link} to="/profile">
              Profile
            </NavLink>
          </li>
          <li className={`${style.elem} ${this.getNavLinkClass("/dialogs")}`}>
            <NavLink className={style.link} to="/dialogs">
              Message
            </NavLink>
          </li>
          <li className={`${style.elem} ${this.getNavLinkClass("/users")}`}>
            <NavLink className={style.link} to="/users">
              Users
            </NavLink>
          </li>
          <li className={`${style.elem} ${this.getNavLinkClass("/news")}`}>
            <NavLink className={style.link} to="/news">
              News
            </NavLink>
          </li>
          <li className={`${style.elem} ${this.getNavLinkClass("/music")}`}>
            <NavLink className={style.link} to="/music">
              Music
            </NavLink>
          </li>
          <li className={`${style.elem} ${this.getNavLinkClass("/setting")}`}>
            <NavLink className={style.link} to="/setting">
              Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

Nav = withRouter(Nav);

export default Nav;
