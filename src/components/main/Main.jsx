import React from 'react';
import style from './Main.module.scss';
import ProfileContainer from "./profile/ProfileContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import UsersContainer from "./users/UsersContainer";
import News from "./news/News";
import Music from "./music/Music";
import Setting from "./setting/Setting";
import {Route} from "react-router-dom";


const Main = () => {

    return (
        <main className={style.main}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/news' render={() => <News />}/>
            <Route path='/music' render={() => <Music />}/>
            <Route path='/setting' render={() => <Setting />}/>
        </main>
    )
}

export default Main;
