import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
// @ts-ignore
import {Route} from 'react-router';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <div className="App-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="App-wrapper-content">
                    <Route path="/profile/:userId?" render={()=><ProfileContainer/>}/>
                    <Route path="/dialogs" render={()=><DialogsContainer/>}/>
                    <Route path="/users" render={()=><UsersContainer />}/>
            </div>
        </div>
    )
};

export default App;