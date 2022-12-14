import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {sendMessageAC} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
        }
    };
};

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;