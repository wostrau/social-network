import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Route} from 'react-router';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

export const App = () => {
    return (
        <div className="App-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path="/dialogs"
                    render={withSuspense(DialogsContainer)}
                />
                <Route
                    path="/users"
                    render={withSuspense(UsersContainer)}
                />
                <Route
                    path="/login"
                    render={withSuspense(Login)}
                />
            </div>
        </div>
    )
};