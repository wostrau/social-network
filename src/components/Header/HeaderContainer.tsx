import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';

type PropsType = {
    setAuthUserData: (userId: any, email: string, login: string) => void;
    userId: null | any;
    email: null | any;
    login: null | any;
    isAuth: boolean
};

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);