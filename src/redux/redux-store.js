import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reduce";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsReducer,
    // sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;