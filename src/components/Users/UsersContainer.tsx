import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

type PropsType = {
    users: any;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    isFetching: boolean;
    followingInProgress: [any];
    setUsers: (users: [any]) => { type: string; users: [any] };
    follow: (userId: number) => { type: string; userId: number };
    unfollow: (userId: number) => { type: string; userId: number };
    setCurrentPage: (currentPage: number) => { type: string; currentPage: number };
    setTotalUsersCount: (totalUsersCount: number) => { type: string; totalUsersCount: number };
    toggleIsFetching: (isFetching: boolean) => { type: string; isFetching: boolean };
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => { type: string, isFetching: boolean, userId: number };
};

class UsersSecondContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalUsersCount);
        });
    };

    onClickPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onClickPageChanged={this.onClickPageChanged}
                setTotalUsersCount={this.props.setTotalUsersCount}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    };
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersSecondContainer);
