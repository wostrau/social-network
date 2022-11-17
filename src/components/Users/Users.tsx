import React from 'react';
import styles from './Users.module.css';
import {initialState} from '../../redux/users-reducer';

type UserTypes = {
    isFollowed: boolean;
    photoUrl: any;
    location: any;
    status: any;
    fullName: any;
    id: number;
};
type PropsType = {
    users: any;
    state: any;
    unfollowUser: (arg: number)=>void;
    followUser: (arg: number)=>void;
    setUsers: (users: any[])=> void;
};

const Users = (props: PropsType) => {
    if (props.users.length === 0) {
        props.setUsers(initialState.users);
    }

    return (
        <div>
            {
                props.state.users.map((u: UserTypes) => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img
                                        src={u.photoUrl}
                                        alt=""
                                        className={styles.userPhoto}
                                    />
                                </div>
                                <div>
                                    {u.isFollowed
                                        ? <button onClick={()=>{props.unfollowUser(u.id)}}>UNFOLLOW</button>
                                        : <button onClick={()=>{props.followUser(u.id)}}>FOLLOW</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;