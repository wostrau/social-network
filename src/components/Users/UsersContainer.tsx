import React from 'react';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';

type PropsType = {
    users: any;
    unfollowUser: (arg: number) => void;
    followUser: (arg: number) => void;
    setUsers: (users: any[]) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (p: number) => void;
    setTotalUsersCount: (c: number) => void;
};

class UsersSecondContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalUsersCount);
            });
    };
    onClickPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };
    render() {
        return <Users
            users={this.props.users}
            setUsers={this.props.setUsers}
            onClickPageChanged={this.onClickPageChanged}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setCurrentPage={this.props.setCurrentPage}
            totalUsersCount={this.props.totalUsersCount}
        />
    };
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSecondContainer);
