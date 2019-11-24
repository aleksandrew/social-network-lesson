import React from 'react'
import style from './Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";
import DialogsForm from "./DialogsForm";

const Dialogs = props => {

  const dialogsElements = props.dialogsData.map(dialog => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  });

  const messageElements = props.messageData.map(message => {
    return <Message message={message.message} key={message.id} id={message.id}/>
  });

  const addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__item}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messageElements}
      </div>
      <br/>
      <DialogsForm onSubmit={addNewMessage}/>
    </div>
  )
};

export default Dialogs;
