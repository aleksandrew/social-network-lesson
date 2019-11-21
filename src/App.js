import React from 'react';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import {BrowserRouter} from "react-router-dom";
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
      <div className={style.container}>
        <Nav/>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
