import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
// @ts-ignore
import {Route} from 'react-router';

const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                    <Route path="/profile/:userId?" render={()=>{<ProfileContainer/>}}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
            </div>
        </div>
    )
};

export default App;