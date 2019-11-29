import React from 'react';
import style from './MyPosts.module.scss';
import Post from './post/Post';
import MyPostForm from "./MyPostForm";

const MyPosts = props => {

  const postElements = props.postData.map(post => {
    return <Post message={post.post} like={post.like} id={post.id}/>
  });

  const addNewPost = post => {
    props.addPost(post.newPostBody)
  };

  return (
    <div className={style.myPost}>
      <MyPostForm onSubmit={addNewPost}/>
      <div className={style.myPost__posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;
