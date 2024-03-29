import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utilities/helpers';

// Actions:
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

// Initial state:
export const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://cdn.imgbin.com/3/21/15/imgbin-computer-icons-social-media-avatar-16-NGyaBCp0seAR3DN2imXtnDs7e.jpg',
            isFollowed: true,
            fullName: 'Alex',
            status: 'I\'m a DEVELOPER',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://cdn.imgbin.com/3/21/15/imgbin-computer-icons-social-media-avatar-16-NGyaBCp0seAR3DN2imXtnDs7e.jpg',
            isFollowed: true,
            fullName: 'Leonard',
            status: 'I\'m a MANAGER',
            location: {city: 'Warsaw', country: 'Poland'}
        },
        {
            id: 3,
            photoUrl: 'https://cdn.imgbin.com/3/21/15/imgbin-computer-icons-social-media-avatar-16-NGyaBCp0seAR3DN2imXtnDs7e.jpg',
            isFollowed: false,
            fullName: 'Devon',
            status: 'I\'m a SPECIALIST',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            photoUrl: 'https://cdn.imgbin.com/3/21/15/imgbin-computer-icons-social-media-avatar-16-NGyaBCp0seAR3DN2imXtnDs7e.jpg',
            isFollowed: false,
            fullName: 'Steve',
            status: 'I\'m a DOCTOR',
            location: {city: 'Berlin', country: 'Germeny'}
        },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

// Reducer:
export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {isFollowed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {isFollowed: false})
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            };
        default:
            return state;
    }
};

// Action creators:
const followSuccessAC = (userId: number) => ({type: FOLLOW, userId});
const unfollowSuccessAC = (userId: number) => ({type: UNFOLLOW, userId});
const setUsersAC = (users: [any]) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

// Thunk creators:
export const getUsersTC = (requestedPage: number, pageSize: number) => {
    return async (dispatch: (AC: any) => {}) => {
        dispatch(toggleIsFetchingAC(true));
        dispatch(setCurrentPageAC(requestedPage));
        const response = await usersAPI.getUsers(requestedPage, pageSize);
        dispatch(toggleIsFetchingAC(false));
        dispatch(setUsersAC(response.items));
        setTotalUsersCountAC(response.totalUsersCount);
    };
};
export const followUnfollowFlow = async (dispatch: (AC: {}) => void, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgressAC(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgressAC(false, userId));
};
export const followTC = (userId: number) => {
    return async (dispatch: (AC: any) => {}) => {
        const apiMethod = usersAPI.follow;
        await followUnfollowFlow(dispatch, userId, apiMethod, followSuccessAC);
    };
};
export const unfollowTC = (userId: number) => {
    return async (dispatch: (AC: any) => {}) => {
        const apiMethod = usersAPI.unfollow;
        await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccessAC);
    };
};