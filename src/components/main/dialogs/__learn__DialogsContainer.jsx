// Самописный аналог react-redux

import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = props => {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsReducer;

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                const onMessageChange = text => {
                    store.dispatch(updateNewMessageActionCreator(text));
                };

                return (
                    <Dialogs updateNewMessageText={onMessageChange}
                             sendMessage={addMessage}
                             dialogsData={state.dialogsData}
                             messageData={state.messageData}
                             newMessageText={state.newMessageText}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;
