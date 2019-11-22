import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


// настраивает данные которе мы возьмём из state
const mapStateToProps = state => {
  return {
    dialogsData: state.dialogsReducer.dialogsData,
    messageData: state.dialogsReducer.messageData,
    newMessageText: state.dialogsReducer.newMessageText,
    isAuth: state.auth.isAuth
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

export default compose(
  connect(mapStateToProps, mapDispatchToPropsToProps), // 3 это и есть хок. Следующий вызов использует этот хок
  withAuthRedirect //2
)(Dialogs); //1

// 1 - целевой файл
// 2 - использует const AuthRedirectComponent = withAuthRedirect(Dialogs)
// 3 - const DialogsContainer = connect(mapStateToProps, mapDispatchToPropsToProps)(AuthRedirectComponent)
// 4 - export default DialogsContainer;
