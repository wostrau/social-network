import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// @ts-ignore
import {Route} from 'react-router';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {initializeAppTC} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

type PropsType = {
    initializeAppTC: () => void;
    isInitialized: boolean;
};

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeAppTC();
    };

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

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
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path="/users"
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path="/login"
                        render={() => <Login/>}
                    />
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state: any) => ({
    isInitialized: state.app.isInitialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
)(App);