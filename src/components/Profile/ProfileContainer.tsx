import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC} from '../../redux/profile-reducer';
// @ts-ignore
import {withRouter} from 'react-router-dom';

type PropsType = {
    profile: any;
    getUserProfileTC: (userId: number) => void;
    match: any;
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
        />
    };
}

const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    match: state.profilePage.match
});

// @ts-ignore
const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);
