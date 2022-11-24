//constants for action type naming
const SET_USER_DATA = 'SET-USER-DATA';

//initial state --> used in <User/> at the moment
export const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
};

//reducer
const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
                };
        default:
            return state;
    }
};

//action creators w/o 'AC' mark in its name
export const setUserData = (userId: any, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {userId, email, login}}
};

export default authReducer;
