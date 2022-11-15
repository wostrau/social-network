import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';

/*type DialogsContainerPropsType = {
    store: any
};*/

const DialogsContainer = () => {
    /*const state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    const onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    };*/

    return (
        <StoreContext.Consumer>
            {(store) => {
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                };
                const onNewMessageChange = (body: any) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body));
                };

                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={store.getState().dialogsPage}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;