import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
    store: any
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    const onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;