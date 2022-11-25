import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataTC} from '../../redux/auth-reducer';

type PropsType = {
    getAuthUserDataTC: () => void;
    userId: null | any;
    email: null | any;
    login: null | any;
    isAuth: boolean
};

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC();
    };

    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state: any) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer);