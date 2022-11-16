import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);