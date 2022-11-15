import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: any
}

const App = (props: AppPropsType) => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Route path="/profile">
                    <Profile
                        store={props.store}
                    />
                </Route>
                <Route path="/dialogs">
                    <DialogsContainer
                        store={props.store}
                    />
                </Route>
               </div>
        </div>
    )
};

export default App;