import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from '../../redux/profile-reducer';
// @ts-ignore
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

export type PropsType = {
    match: any;
    profile: any;
    status: string;
    getUserProfileTC: (userId: number) => void;
    getUserStatusTC: (userId: number) => void;
    updateUserStatusTC: (status: string) => void;
};

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 25802
        }
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);
    };

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatusTC={this.props.updateUserStatusTC}
        />
    };
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    match: state.profilePage.match,
    status: state.profilePage.status
});

export default connect(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC
    })
)(ProfileContainer);
