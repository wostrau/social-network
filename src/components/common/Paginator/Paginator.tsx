import React from 'react';
import styles from './Paginator.module.css';

type PropsType = {
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    onClickPageChanged: (pageNumber: number) => void;
}

export const Paginator = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div>
            {pages.map((p: number) => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={(event) => {
                        props.onClickPageChanged(p);
                    }}
                >{p}</span>
            })}
        </div>
    );
};