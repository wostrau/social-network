import React from 'react';
import userPhoto1 from '../../assets/images/photographer1.png';
import styles from './Users.module.css';
import axios from 'axios';

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
    unfollowUser: (arg: number) => void;
    followUser: (arg: number) => void;
    setUsers: (users: any[]) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    setCurrentPage: (p: number) => void;
};

export class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                            className={this.props.currentPage === p && styles.selectedPage}
                            onClick={() => {
                                this.props.setCurrentPage(p)
                            }}
                        >{p}</span>
                    })}
                </div>
                <div>
                    {
                        this.props.users.map((u: UserTypes) => {
                            return (
                                <div key={u.id}>
                            <span>
                                <div>
                                    <img
                                        src={u.photoUrl.small ? u.photoUrl.small : userPhoto1}
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
            </div>
        );
    };
}
