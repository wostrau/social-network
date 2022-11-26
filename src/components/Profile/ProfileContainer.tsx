import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC} from '../../redux/profile-reducer';
// @ts-ignore
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type PropsType = {
    profile: any;
    status: string;
    getUserProfileTC: (userId: number) => void;
    match: any;
    isAuth: boolean;
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1
        }
        this.props.getUserProfileTC(userId);
    };

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
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
    connect(mapStateToProps, {getUserProfileTC})
)(ProfileContainer);
