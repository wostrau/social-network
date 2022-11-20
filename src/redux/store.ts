import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

//store
/*const store: StoreType = {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};*/

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

//API - application program interface --> just FYI