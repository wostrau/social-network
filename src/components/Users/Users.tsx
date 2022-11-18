import React from 'react';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto1 from '../../assets/images/photographer1.png';

type UserTypes = {
    isFollowed: boolean;
    photos: any;
    location: any;
    status: any;
    name: any;
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
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            })
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
                                        src={u.photos.small != null
                                            ? u.photos.small
                                            : userPhoto1}
                                        alt=''
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
    );
};

export default Users;