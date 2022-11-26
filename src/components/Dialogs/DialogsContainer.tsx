import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);