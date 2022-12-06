import {PostType} from './store';
import {profileAPI, usersAPI} from '../api/api';

// Actions:
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const DELETE_POST = 'DELETE-POST';

// Initial state:
const initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'Hello', likesCount: 11},
        {id: 3, message: 'Blah-blah', likesCount: 12},
        {id: 4, message: 'Yeah!', likesCount: 13},
        {id: 5, message: 'Yo!', likesCount: 14}
    ],
    profile: null,
    status: ''
};

// Reducer:
export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
};

// Action creators:
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText});
const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile});
const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status});
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId});

// Thunk creators:
export const getUserProfileTC = (userId: number) => async (dispatch: (AC: any) => {}) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getUserStatusTC = (userId: number) => async (dispatch: (AC: any) => {}) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};
export const updateUserStatusTC = (status: string) => async (dispatch: (AC: any) => {}) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

