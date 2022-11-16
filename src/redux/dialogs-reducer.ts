const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Blah-blah'},
        {id: 4, message: 'Yeah!'},
        {id: 5, message: 'Yo!'}
    ],
    messages: [
        {id: 1, message: 'IT Kamasutra'},
        {id: 2, message: 'Coding-shmoding'},
        {id: 3, message: 'Boom-boom!'},
        {id: 4, message: 'Come on, come on!'},
        {id: 5, message: 'Great!'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.newText};
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ''
            };
        default:
            return state;
    }
};

//action creators
export const updateNewMessageBodyActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});


export default dialogsReducer;
