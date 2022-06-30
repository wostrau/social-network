import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

type statePropsType = {
    state: any
}

const App = (props: statePropsType) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path="/profile" render={() => {
                            return <Profile
                                state={props.state.profilePage}
                            />;
                        }}/>
                        <Route path="/dialogs" render={() => {
                            return <Dialogs
                                state={props.state.dialogsPage}
                            />;
                        }}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;