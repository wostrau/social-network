import React from 'react';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';

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
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    followingInProgress: [any];
    followTC: (userId: number) => void;
    unfollowTC: (userId: number) => void;
    onClickPageChanged: (pageNumber: number) => void;
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void;
};

export const Users = (props: PropsType) => {
    return (
        <div>
            <Paginator
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                onClickPageChanged={props.onClickPageChanged}
            />
            <div>
                {props.users.map((user: UserTypes) => <User
                    key={user.id}
                    user={user}
                    followingInProgress={props.followingInProgress}
                    followTC={props.followTC}
                    unfollowTC={props.unfollowTC}
                />)}
            </div>
        </div>
    );
};
