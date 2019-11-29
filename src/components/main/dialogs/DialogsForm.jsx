import React from 'react'
import {Field, reduxForm} from "redux-form";
import {validate} from "../../../../src/assets/utils/validators/validators";
import {Textarea as renderField} from "../../../components/common/FormsControl/FormsControl";


const DialogsForm = props => {
  const {handleSubmit, submitting} = props;

  return <form onSubmit={handleSubmit}>
    <Field component={renderField} name={"newMessageBody"} label={"Enter your message"}/>
    <br/>
    <button type="submit" disabled={submitting}>Add post</button>
  </form>
};

const DialogsFormRedux = reduxForm({form: "dialogAddMessageForm", validate})(DialogsForm);

export default DialogsFormRedux;
