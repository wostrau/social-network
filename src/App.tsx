import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';

const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/dialogs">
                    <DialogsContainer/>
                </Route>
                <Route path="/users">
                    <UsersContainer/>
                </Route>
            </div>
        </div>
    )
};

export default App;