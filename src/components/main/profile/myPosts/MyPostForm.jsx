import React from 'react';
import style from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../assets/utils/validators/validators";

const MyPosts = props => {

  const maxLength10 = maxLengthCreator(20);

  return (
    <form className={style.myPost__fieldInput} onSubmit={props.handleSubmit}>
      <Field component={"textarea"} name={"newPostBody"} placeholder={"Enter your post"}
             validate={[required, maxLength10]} />
      <br/>
      <button>Add post</button>
    </form>
  )
};

const MyPostFormRedux = reduxForm({form: "profileAddPostForm"})(MyPosts);

export default MyPostFormRedux;
