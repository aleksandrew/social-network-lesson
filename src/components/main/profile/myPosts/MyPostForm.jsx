import React from 'react';
import style from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {validate} from "../../../../assets/utils/validators/validators";
import {Textarea as renderField} from "../../../common/FormsControl/FormsControl";

const MyPosts = props => {
  const {handleSubmit, submitting} = props;

  return (
    <form className={style.myPost__fieldInput} onSubmit={handleSubmit}>
      <Field name={"newPostBody"} component={renderField} label={"Enter your post"}/>
      <br/>
      <button type="submit" disabled={submitting}>Add post</button>
    </form>
  )
};

const MyPostFormRedux = reduxForm({form: "profileAddPostForm", validate})(MyPosts);

export default MyPostFormRedux;


