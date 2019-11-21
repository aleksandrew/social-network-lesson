import React from 'react';
import classes from './Post.module.css';

const Post = props => {
	return (
		<div className={classes.item}>
			<img className={classes.item__img} src="https://pmctvline2.files.wordpress.com/2016/03/jenna.jpg"/>
			{props.message}
			<button>like({props.like})</button>
		</div>
	)
}

export default Post;
