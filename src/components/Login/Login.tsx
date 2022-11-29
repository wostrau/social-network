import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormControl/FormControl';
import {requiredField} from '../../utilities/validators/validators';
import {connect} from 'react-redux';
import {loginUserTC, logoutUserTC} from '../../redux/auth-reducer';
import {Redirect} from 'react-router';
import styles from '../common/FormControl/FormControl.module.css';

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    placeholder={'Email'}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    type={'checkbox'}
                    component={Input}
                >remember me</Field>
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props: any) => {
    const onSubmitHandler = (formData: any) => {
        props.loginUserTC(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    loginUserTC,
    logoutUserTC
})(Login);