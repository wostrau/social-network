import React from 'react';
import styles from './../Dialogs.module.css';

type messagePropsType = {
    id: number
    message: string
};

const Message = (props: messagePropsType) => {
    return (
        <div
            className={styles.message}
        >{props.message}</div>
    );
};

export default Message;