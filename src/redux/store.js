// Самописный store.
// Пприблизительно это инкапсулировано в redux

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, like: 23, post: 'Lorem ipsum dolor sit amet.'},
                {id: 2, like: 35, post: 'Lorem ipsum dolor sit.'},
                {id: 3, like: 60, post: 'Lorem ipsum dolor.'},
                {id: 4, like: 1, post: 'Lorem ipsum.'},
                {id: 5, like: 5, post: 'Lorem.'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Roman'},
                {id: 3, name: 'Dmitriy'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Masha'}
            ],
            messageData: [
                {id: 1, message: 'Lorem ipsum dolor sit amet.'},
                {id: 2, message: 'Lorem ipsum dolor sit.'},
                {id: 3, message: 'Lorem ipsum dolor.'},
                {id: 4, message: 'Lorem ipsum.'},
                {id: 5, message: 'Lorem.'}
            ],
            newMessageText: 'Hi'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state change')
    },

    // методы которые не изменяют стейт
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    // методы которые изменяют стейт
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
