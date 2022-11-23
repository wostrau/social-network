import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';

type PropsType = {
    profile: any
    setUserProfile: (profile: any) => void;
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
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
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);