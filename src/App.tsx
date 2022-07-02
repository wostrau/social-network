import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


type statePropsType = {
    state: any
}

const App = (props: statePropsType) => {
    // @ts-ignore
    return (
        <Router>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                        <Route path="/profile">
                            <Profile state={props.state.profilePage}/>
                        </Route>
                        <Route path="/dialogs">
                            <Dialogs state={props.state.dialogsPage}/>
                        </Route>
                </div>
            </div>
        </Router>
    )
};

export default App;