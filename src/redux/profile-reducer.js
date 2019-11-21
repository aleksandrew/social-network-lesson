const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postData: [
        {id: 1, like: 23, post: 'Lorem ipsum dolor sit amet.'},
        {id: 2, like: 35, post: 'Lorem ipsum dolor sit.'},
        {id: 3, like: 60, post: 'Lorem ipsum dolor.'},
        {id: 4, like: 1, post: 'Lorem ipsum.'},
        {id: 5, like: 5, post: 'Lorem.'}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 9,
                post: state.newPostText,
                like: 0
            };

            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            };

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.text
            };

      case SET_USER_PROFILE:

        return {
          ...state,
          profile: action.profile
        };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export const updateNewPostActionCreator = text => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

export default profileReducer;
