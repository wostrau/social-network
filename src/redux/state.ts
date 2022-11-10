
//types
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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
}

//store
const store: StoreType = {
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state) {
        console.log('state changed')
    },
    addPost(postMessage: string) {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: postMessage,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
};

export default store;

//for access to store from global window
//window.store = store;
