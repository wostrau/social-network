import React from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {followTC, getUsersTC, setCurrentPage, toggleIsFollowingProgress, unfollowTC} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selector';

type PropsType = {
    users: any;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    isFetching: boolean;
    followingInProgress: [any];
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => { type: string, isFetching: boolean, userId: number };
    getUsersTC: (currentPage: number, pageSize: number) => void;
    followTC: (userId: number) => void;
    unfollowTC: (userId: number) => void;
};

class UsersSecondContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    };

    onClickPageChanged(pageNumber: number) {
        this.props.getUsersTC(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followTC={this.props.followTC}
                unfollowTC={this.props.unfollowTC}
                onClickPageChanged={this.onClickPageChanged}
            />
        </>
    };
}

const mapStateToProps = (state: any) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export const UsersContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsersTC,
        followTC,
        unfollowTC
    })
)(UsersSecondContainer);