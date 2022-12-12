import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {authReducer} from './auth-reducer';
import {appReducer} from './app-reducer';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));