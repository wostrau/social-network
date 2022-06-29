import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <DialogItem name="Sasha" id="1"/>
            <DialogItem name="Maksim" id="2"/>
            <DialogItem name="Ivan" id="3"/>

            <div className={styles.messages}>
                <Message message="HI"/>
                <Message message="HOI"/>
                <Message message="YO!"/>


                <div className={styles.message}>HI</div>
                <div className={styles.message}>HOI</div>
            </div>
        </div>
    );
};

export default Dialogs;