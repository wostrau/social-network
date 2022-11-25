import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto1 from '../../assets/images/photographer1.png';
import styles from './Users.module.css';

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

//need to move class to container component
export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p: number) => {
                    return <span
                        // @ts-ignore
                        className={props.currentPage === p && styles.selectedPage}
                        onClick={(event) => {
                            props.onClickPageChanged(p);
                        }}
                    >{p}</span>
                })}
            </div>
            <div>
                {
                    props.users.map((u: UserTypes) => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${u.id}`}>
                                    <img
                                        src={userPhoto1}
                                        alt="USER"
                                        className={styles.userPhoto}
                                    />
                                        </NavLink>
                                </div>
                                <div>
                                    {u.isFollowed
                                        ? <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.unfollowTC(u.id)
                                            }}
                                        >UNFOLLOW</button>
                                        : <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.followTC(u.id)
                                            }}
                                        >FOLLOW</button>
                                    }
                                </div>
                            </span>
                                <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
