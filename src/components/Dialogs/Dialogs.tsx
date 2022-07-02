import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props: any) => {
    const dialogElements = props.state.dialogs.map((d: { name: string; id: string; }) => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = props.state.messages.map((m: { id: string; message: string; }) => <Message id={m.id} message={m.message}/>);

    return (
        <div className={styles.dialogs}>
            {dialogElements}
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;