const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Dmitriy'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Masha'}
    ],
    messageData: [
        {id: 1, message: 'Lorem ipsum dolor sit amet.'},
        {id: 2, message: 'Lorem ipsum dolor sit.'},
        {id: 3, message: 'Lorem ipsum dolor.'},
        {id: 4, message: 'Lorem ipsum.'},
        {id: 5, message: 'Lorem.'}
    ],
    newMessageText: 'Hi'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_MESSAGE:
            const newMessage = {
                id: 12,
                message: state.newMessageText
            };

            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, newMessage]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };

        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});

export default dialogsReducer;
