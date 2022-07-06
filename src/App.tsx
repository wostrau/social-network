import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {addPost, state} from './redux/state';

type ProfilePropsType = {
    state: any
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
                <Route>
                    <HelloMessage
                        message={message}
                        addPost={addPost}
                    />
                </Route>
                <Route>
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
    addPost?: (postMessage: string) => void
}

function HelloMessage(props: MessageType) {
    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        alert(postMessageRef.current?.value)
    };

    return <div>
        {props.message}
        <textarea
            ref={postMessageRef}
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