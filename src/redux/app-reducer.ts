import {getAuthUserDataTC} from './auth-reducer';

// Actions:
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

// Initial state:
export const initialState = {
    isInitialized: false,
};

// Reducer:
export const appReducer = (state = initialState, action: any) => {
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

// Action creators:
const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS});

// Thunk creators:
export const initializeAppTC = () => (dispatch: (AC: any) => any) => {
    const promise = dispatch(getAuthUserDataTC());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccessAC());
    });
};