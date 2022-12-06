import {NavLink} from 'react-router-dom';
import userPhoto1 from '../../../assets/images/photographer1.png';
import styles from '../Users.module.css';
import React from 'react';

type UserType = {
    id: number;
    name: string;
    status: string;
    isFollowed: boolean;
}

type PropsType = {
    user: UserType;
    followingInProgress: [any];
    followTC: (userId: number) => void;
    unfollowTC: (userId: number) => void;
}

export const User = (props: PropsType) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${props.user.id}`}>
                        <img
                            src={userPhoto1}
                            alt="USER"
                            className={styles.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {props.user.isFollowed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unfollowTC(props.user.id)
                            }}
                        >UNFOLLOW</button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.followTC(props.user.id)
                            }}
                        >FOLLOW</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>
    );
};