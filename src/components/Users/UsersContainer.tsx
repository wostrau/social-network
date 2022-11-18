import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
