import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {ActionType, PostType, store, StoreType} from './redux/store';

export type ProfilePropsType = {
    store: StoreType
    dispatch: (a: ActionType) => void
}

const App = (props: ProfilePropsType) => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route path="/profile">
                    <Profile
                        profilePage={props.store._state.profilePage}
                        dispatch={props.store.dispatch}
                    />
                </Route>
                <Route path="/dialogs">
                    <Dialogs
                        store={props.store}
                    />
                </Route>
               </div>
        </div>
    )
};

export default App;