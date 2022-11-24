import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
// @ts-ignore
import {withRouter} from 'react-router-dom';

type PropsType = {
    profile: any;
    setUserProfile: (profile: any) => void;
    match: any;
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 1}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
