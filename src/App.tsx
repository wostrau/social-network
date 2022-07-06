import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {addPost, changeNewText, PostType, state} from './redux/state';

type ProfilePropsType = {
    state: any
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: ProfilePropsType) => {
    let message = state.profilePage.posts[0].message
    let message2 = state.profilePage.posts[1].message

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route path="/profile">
                    <Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />
                </Route>
                <Route path="/dialogs">
                    <Dialogs
                        state={props.state.dialogsPage}
                    />
                </Route>
                <Route path="/hello">
                    <HelloMessage
                        posts={state.profilePage.posts}
                        message={state.profilePage.newPostText}
                        addPost={addPost}
                        changeNewText={changeNewText}
                    />
                </Route>
                <Route path="/bye">
                    <ByeMessage
                        message={message2}
                    />
                </Route>
            </div>
        </div>
    )
};

type MessageType = {
    message: string
    posts?: Array<PostType>
    addPost?: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

function HelloMessage(props: MessageType) {
    props.addPost(props.message)
};

return <div>
    <hr/>
    {props.message}
    <hr/>
    {props.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
    <hr/>
    <textarea
        ref={postMessageRef}
        value={props.message}
        onChange={(e) => {
            props.changeNewText(e.currentTarget.value);
        }}
    ></textarea>
    <button
        onClick={addPost}
    >add post
    </button>
</div>
}

const ByeMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}

export default App;