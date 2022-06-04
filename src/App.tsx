import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route
                        exact path='/profile'
                        component={Profile}
                    />
                    <Route
                        exact path='/dialogs'
                        component={Dialogs}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;