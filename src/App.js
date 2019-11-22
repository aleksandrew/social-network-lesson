import React from 'react';
import Nav from './components/nav/Nav';
import LoginPage from './components/login/Login';
import Main from './components/main/Main';
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import style from "./App.module.scss";


const App = () => {

  return (
    <BrowserRouter>
      <div className={style.headerBackground}>
        <div className={style.container}>
          <HeaderContainer/>
        </div>
      </div>
      <div>
        <Route path='/login' render={() => <LoginPage />} />
      </div>
      <div className={style.container}>
        <Nav/>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
