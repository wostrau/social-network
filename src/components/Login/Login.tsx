import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormControl/FormControl';
import {maxLengthVC, minLengthVC, requiredField} from '../../utilities/validators/validators';

const LoginForm = (props: any) => {
    const maxLength30 = maxLengthVC(30);
    const minLength3 = minLengthVC(3);

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    placeholder={'Login'}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Login'}
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