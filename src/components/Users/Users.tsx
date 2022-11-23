import React from 'react';
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
    unfollowUser: (arg: number) => void;
    followUser: (arg: number) => void;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    setTotalUsersCount: (c: number) => void;
    onClickPageChanged: (pageNumber: number) => void;
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
                                    <img
                                        src={userPhoto1}
                                        alt='USER PHOTO'
                                        className={styles.userPhoto}
                                    />
                                </div>
                                <div>
                                    {u.isFollowed
                                        ? <button onClick={() => {
                                            props.unfollowUser(u.id)
                                        }}>UNFOLLOW</button>
                                        : <button onClick={() => {
                                            props.followUser(u.id)
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
}
