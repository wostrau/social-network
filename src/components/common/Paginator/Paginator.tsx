import React, {useState} from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    portionSize: number;
    onClickPageChanged: (pageNumber: number) => void;
};

export const Paginator = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    const portionCount = Math.ceil(pagesCount / props.portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    const rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={()=>{
                setPortionNumber(portionNumber - 1);
            }}>PREV</button>}

            {pages
                .filter((p: number) => {
                    return p >= leftPortionPageNumber && p <= rightPortionPageNumber;
                })
                .map((p: number) => {
                return <span
                    key={p}

                    className={cn({[styles.selectedPage] : props.currentPage === p}, styles.pageNumber)}

                    onClick={(event) => {
                        props.onClickPageChanged(p);
                    }}
                >{p}</span>
            })}

            {portionCount > 1 && <button onClick={()=>{
                setPortionNumber(portionNumber + 1);
            }}>NEXT</button>}
        </div>
    );
};