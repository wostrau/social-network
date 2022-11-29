import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataTC, loginUserTC, logoutUserTC} from '../../redux/auth-reducer';

type PropsType = {
    getAuthUserDataTC: () => void;
    logoutUserTC: () => void;
    userId: null | any;
    email: null | any;
    login: null | any;
    isAuth: boolean;
};

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC();
    };

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logoutUserTC={this.props.logoutUserTC}
        />
    };
}

const mapStateToProps = (state: any) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    getAuthUserDataTC,
    logoutUserTC
})(HeaderContainer);