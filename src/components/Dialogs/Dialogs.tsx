import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

type DialogsPropsType = {
    dialogsPage: any
    updateNewMessageBody: any
    sendMessage: any
}

const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage;

    const dialogElements = state.dialogs.map((d: { name: string, id: number }) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    });
    const messageElements = state.messages.map((m: { id: number, message: string }) => {
        return <Message key={m.id} id={m.id} message={m.message}/>
    });
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    };
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.currentTarget.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message'}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;