import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props: any) => {
    return (
        <div className={styles.dialogs}>
            <DialogItem id="1" name="Sasha" dialog={props.state.dialogs}/>
            <DialogItem id="2" name="Maksim" dialog={props.state.dialogs}/>
            <DialogItem id="3"  name="Ivan" dialog={props.state.dialogs}/>

            <div className={styles.messages}>
                <Message id='1' message={props.state.messages}/>
                <Message id='2' message={props.state.messages}/>
                <Message id='3' message={props.state.messages}/>


                <div className={styles.message}>HI</div>
                <div className={styles.message}>HOI</div>
            </div>
        </div>
    );
};

export default Dialogs;