//constants for action type naming
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

//initial state --> used in <User/> at the moment
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
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

//reducer
const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u: any) => {
                    return u.id === action.userId ? {...u, isFollowed: true} : u
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u: any) => {
                    return u.id === action.userId ? {...u, isFollowed: false} : u
                })
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
                    : state.followingInProgress.filter((id: number) => id !== action.userId)};
        default:
            return state;
    }
};

//action creators w/o 'AC' mark in its name
export const follow = (userId: number) => ({type: FOLLOW, userId});
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsers = (users: [any]) => ({type: UNFOLLOW, users});
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export default usersReducer;
