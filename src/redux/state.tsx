type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    message: string
}
type PostType = {
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
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let rerenderEntireTree = () = {};

export const state: RootStateType = {
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
    }
};

export const addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};