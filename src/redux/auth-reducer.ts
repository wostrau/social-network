//constants for action type naming
import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

//initial state --> used in <User/> at the moment
export const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

//reducer
const authReducer = (state = initialState, action: any) => {
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

//action creators w/o 'AC'
const setAuthUserData = (userId: null | any, email: null | string, login: null | string, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
};

//thunk creators
export const getAuthUserDataTC = () => (dispatch: (AC: any) => {}) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            const {userId, email, login} = response.data.data;
            dispatch(setAuthUserData(userId, email, login, true));
        }
    });
};
export const loginUserTC = (email: string, password: string, rememberMe: boolean) => (dispatch: (AC: any) => {}) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC());
        }
    });
};

export const logoutUserTC = () => (dispatch: (AC: any) => {}) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;
