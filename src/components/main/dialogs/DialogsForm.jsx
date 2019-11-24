import React from 'react'
import {Field, reduxForm} from "redux-form";

const DialogsForm = props => {

  return <form onSubmit={props.handleSubmit}>
    <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
    <br/>
    <button>Add post</button>
  </form>
};

const DialogsFormRedux = reduxForm({form: "dialogAddMessageForm"})(DialogsForm);

export default DialogsFormRedux;
