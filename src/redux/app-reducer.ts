import {getAuthUserDataTC} from './auth-reducer';

//constants for action type naming
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

//initial state --> used in <User/> at the moment
export const initialState = {
    isInitialized: false,
};

//reducer
const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};

//action creators
const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS});

//thunk creators
export const initializeAppTC = () => (dispatch: (AC: any) => any) => {
    const promise = dispatch(getAuthUserDataTC());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccessAC());
    });
};

export default appReducer;
