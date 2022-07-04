import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

type ProfilePropsType = {
    state: any
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: ProfilePropsType) => {
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
            </div>
        </div>
    )
};

export default App;