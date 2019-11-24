import React from 'react';
import Nav from './components/nav/Nav';
import LoginPage from './components/login/Login';
import Main from './components/main/Main';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import style from "./App.module.scss";


let App = () => {

  if (window.location.pathname === '/login') {

    return <div>
      <div className={style.headerBackground}>
        <div className={style.container}>
          <HeaderContainer/>
        </div>
      </div>
      <div className={style.container}>
        <Route path='/login' render={() => <LoginPage/>}/>
      </div>
    </div>

  }

    return <div>
      <div className={style.headerBackground}>
        <div className={style.container}>
          <HeaderContainer/>
        </div>
      </div>
      <div className={style.container}>
        <Nav/>
        <Main/>
      </div>
    </div>
};

App = withRouter(App);

export default App;
