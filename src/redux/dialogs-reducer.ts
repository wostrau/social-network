// Actions:
const SEND_MESSAGE = 'SEND-MESSAGE';

// Initial state:
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
    ]
};

// Reducer:
export const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

// Action creators:
export const sendMessageAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody});
