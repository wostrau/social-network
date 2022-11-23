import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from '../../redux/users-reducer';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

type PropsType = {
    users: any;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    isFetching: boolean;
    setUsers: (users: [any]) => { type: string; users: [any] };
    follow: (userId: number) => { type: string; userId: number };
    unfollow: (userId: number) => { type: string; userId: number };
    setCurrentPage: (currentPage: number) => { type: string; currentPage: number };
    setTotalUsersCount: (totalUsersCount: number) => { type: string; totalUsersCount: number };
    toggleIsFetching: (isFetching: boolean) => { type: string; isFetching: boolean };
};

//need to move class to container component
class UsersSecondContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalUsersCount);
            });
    };

    onClickPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersSecondContainer);
