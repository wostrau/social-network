import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    placeholder={'Login'}
                    component={'input'}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Login'}
                    component={'input'}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    type={'checkbox'}
                    component={'input'}
                >remember me</Field>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export const Login = () => {
    const onSubmitHandler = (formData: any) => {
        console.log(formData);
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};