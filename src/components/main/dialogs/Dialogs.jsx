import React from 'react'
import style from './Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = props => {

    const dialogsElements = props.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    });

    const messageElements = props.messageData.map( message => {
        return <Message message={message.message} key={message.id} id={message.id} />
    });

    const addMessage = () => {
        props.sendMessage();
    };

    const onMessageChange = e => {
        const text = e.target.value;
        props.updateNewMessageText(text)
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__item}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messageElements }
            </div>
            <br/>
            <textarea
                value={props.newMessageText}
                onChange={onMessageChange}/>
            <br/>
            <button onClick={ addMessage }>Add post</button>
        </div>
    )
}

export default Dialogs;
