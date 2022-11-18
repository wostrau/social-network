import React from 'react';
import userPhoto1 from '../../assets/images/photographer1.png';
import styles from './Users.module.css';
import axios from 'axios';

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
    unfollowUser: (arg: number) => void;
    followUser: (arg: number) => void;
    setUsers: (users: any[]) => void;
};

export class Users extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <div>
                {
                    this.props.users.map((u: UserTypes) => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                    <img
                                        src={u.photos.small != null
                                            ? u.photos.small
                                            : userPhoto1}
                                        alt=""
                                        className={styles.userPhoto}
                                    />
                                </div>
                                <div>
                                    {u.isFollowed
                                        ? <button onClick={() => {
                                            this.props.unfollowUser(u.id)
                                        }}>UNFOLLOW</button>
                                        : <button onClick={() => {
                                            this.props.followUser(u.id)
                                        }}>FOLLOW</button>
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
}
