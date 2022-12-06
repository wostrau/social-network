import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
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

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));