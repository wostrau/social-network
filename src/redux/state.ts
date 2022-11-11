//store
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 10},
                {id: 2, message: 'Hello', likesCount: 11},
                {id: 3, message: 'Blah-blah', likesCount: 12},
                {id: 4, message: 'Yeah!', likesCount: 13},
                {id: 5, message: 'Yo!', likesCount: 14}
            ],
            newPostText: 'SAMURAI'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber(state) {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
};

//vars for AC
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

//action creators
export const addPostActionCreator = (newText: string) => ({type: ADD_POST, newText: newText});
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const updateNewMessageBodyActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

//types
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: {}
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (s: RootStateType) => void
    addPost: (p: string) => void
    updateNewPostText: (t: string) => void
    subscribe: (observ: any) => void
    getState: () => RootStateType
    dispatch: (a: ActionType) => void
}
export type ActionType = {
    type: string
    newText?: string | undefined
}

//for access to store from global window
//window.store = store;

//API - application program interface --> just FYI