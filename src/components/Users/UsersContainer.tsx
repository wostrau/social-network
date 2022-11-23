import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from '../../redux/users-reducer';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto1 from '../../assets/images/photographer1.png';

type UserTypes = {
    isFollowed: boolean;
    photoUrl: any;
    location: any;
    status: any;
    name: any;
    id: number;
};
type PropsType = {
    users: any;
    unfollowUser: (userId: number) => void;
    followUser: (userId: number) => void;
    setUsers: (users: any[]) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (p: number) => void;
    setTotalUsersCount: (c: number) => void;
    isFetching: boolean;
    toggleIsFetching: (isFetching: boolean) => void;
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
            {this.props.isFetching ? <img src={userPhoto1} className={styles.usersPhoto}/> : null}
            <Users
                users={this.props.users}
                unfollowUser={this.props.unfollowUser}
                followUser={this.props.followUser}
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSecondContainer);
