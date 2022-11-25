import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileTC} from '../../redux/profile-reducer';
// @ts-ignore
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type PropsType = {
    profile: any;
    getUserProfileTC: (userId: number) => void;
    match: any;
    isAuth: boolean;
}

//1st container component over the Profile presentation component
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

//2nd container component over the Profile presentation component
const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//3rd container component over the Profile presentation component
// @ts-ignore
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

//4th container component over the Profile presentation component
const mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    match: state.profilePage.match
});
export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);
