import React from 'react';
import styles from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type dialogItemPropsType = {
    name: string
    id: string
}
const DialogItem = (props: dialogItemPropsType) => {
    const route = '/dialogs/' + props.id;
    return (
        <div className={styles.dialogsItem}>
            <NavLink to={route}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;