import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = props => {

    const postElements = props.postData.map( post => {
        return <Post message={post.post} like={post.like} id={post.id}/>
    });

	const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost()
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

	return (
		<div className={classes.myPost}>
			My Posts
			<div className={classes.myPost__fieldInput}>
				<textarea
					ref={newPostElement}
					value={props.newPostText}
					onChange={onPostChange}/>
				<br/>
				<button onClick={ onAddPost }>Add post</button>
			</div>
			<div className={classes.myPost__posts}>
				{ postElements }
			</div>
		</div>
	)
}

export default MyPosts;
