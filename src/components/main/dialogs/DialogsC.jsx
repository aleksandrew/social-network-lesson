import React from 'react'
import classes from './Dialogs.module.css';
import Message from "./message/Message";
import DialogItem from "./dialogItem/DialogItem";

class Dialogs extends React.Component {

    dialogsElements = this.props.dialogsData.map( dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    });

    messageElements = this.props.messageData.map( message => {
        return <Message message={message.message} key={message.id} id={message.id} />
    });

    addMessage = () => {
        this.props.sendMessage();
    };

    onMessageChange = e => {
        const text = e.target.value;
        this.props.updateNewMessageText(text)
    };

    render() {
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs__item}>
                    { this.dialogsElements }
                </div>
                <div className={classes.messages}>
                    { this.messageElements }
                </div>
                <br/>
                <textarea
                    value={this.props.newMessageText}
                    onChange={this.onMessageChange}/>
                <br/>
                <button onClick={ this.addMessage }>Add post</button>
            </div>
        )
    }
}

// const Dialogs = props => {
//
//
//     )
// }

export default Dialogs;
