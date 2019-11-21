import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToPropsToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        updateNewPostText: text => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToPropsToProps)(MyPosts);

export default MyPostsContainer;
