import React from "react";
import images from "../../images/images";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type dialogItemPropsType = {
    name: string
    id: number
}

type messagePropsType = {
    message: string
}

const DialogItem = (props: dialogItemPropsType) => {
    const route = '/dialogs/' + props.id;
    return (
        <div className={styles.dialogsItem}>
            <NavLink to={route}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: messagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <DialogItem name='Sasha' id='1' />
            <DialogItem name='Maksim' id='2' />
            <DialogItem name='Ivan' id='3' />

            <div className={styles.messages}>
                <Message message='HI' />
                <Message message='HOI' />
                <Message message='YO!' />


                <div className={styles.message}>HI</div>
                <div className={styles.message}>HOI</div>
            </div>
        </div>
    );
};

export default Dialogs;