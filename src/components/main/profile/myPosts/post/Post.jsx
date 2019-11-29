import React from 'react';
import style from './Post.module.scss';

const Post = props => {
	return (
		<div className={style.item}>
			<img className={style.item__img} src="https://pmctvline2.files.wordpress.com/2016/03/jenna.jpg"/>
			{props.message}
			<button>like({props.like})</button>
		</div>
	)
}

export default Post;
