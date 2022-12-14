import React from 'react';
import './App.css';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {initializeAppTC} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {store} from './redux/redux-store';
import {App} from './App';

type PropsType = {
    initializeAppTC: () => void;
    isInitialized: boolean;
};

class AppContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeAppTC();
    };

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <React.StrictMode>
                <BrowserRouter
                    basename={process.env.PUBLIC_URL}
                >
                    <Provider store={store}>
                        <App/>
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        )
    };
}

const mapStateToProps = (state: any) => ({
    isInitialized: state.app.isInitialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
)(AppContainer);