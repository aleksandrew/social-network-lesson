import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


// настраивает данные которе мы возьмём из state
const mapStateToProps = state => {
    return {
        dialogsData: state.dialogsReducer.dialogsData,
        messageData: state.dialogsReducer.messageData,
        newMessageText: state.dialogsReducer.newMessageText
    }
};

// отправляет в презентационую компоненту
const mapDispatchToPropsToProps = dispatch => {
    console.log(dispatch)
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },

        updateNewMessageText: text => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToPropsToProps)(Dialogs);

export default DialogsContainer;
