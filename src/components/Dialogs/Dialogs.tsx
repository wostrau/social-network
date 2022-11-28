import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router';
import {Field, reduxForm} from 'redux-form';

type DialogsPropsType = {
    dialogsPage: any
    updateNewMessageBody: any
    sendMessage: any
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage;

    const dialogElements = state.dialogs.map((d: { name: string, id: number }) => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    });
    const messageElements = state.messages.map((m: { id: number, message: string }) => {
        return <Message key={m.id} id={m.id} message={m.message}/>
    });

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <AddMessageFormRedux
                        onSubmit={addNewMessage}
                    />
                </div>
            </div>
        </div>
    );
};

const AddMessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({
    form: 'DialogAddMessageFormRedux'
})(AddMessageForm);

export default Dialogs;