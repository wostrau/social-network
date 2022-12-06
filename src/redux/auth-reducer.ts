import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

// Actions:
const SET_USER_DATA = 'SET-USER-DATA';

// Initial state:
export const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

// Reducer:
export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

// Action creators:
const setAuthUserDataAC = (userId: null | any, email: null | string, login: null | string, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
};

// Thunk creators:
export const getAuthUserDataTC = () => async (dispatch: (AC: any) => {}) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {userId, email, login} = response.data.data;
        dispatch(setAuthUserDataAC(userId, email, login, true));
    }
};
export const loginUserTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: (AC: any) => {}) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC());
    } else {
        const errorMessage = response.data.resultCode.messages.length > 0
            ? response.data.resultCode.messages[0]
            : 'SOME ERROR';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
};
export const logoutUserTC = () => async (dispatch: (AC: any) => {}) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
    }
};