import React from 'react';
import styles from './FormControl.module.css';
import {Field} from 'redux-form';

const FormControl = ({meta: {touched, error}, children}: any) => {
    const isError = touched && error;

    return (
        <div className={`${styles.formControl} ${isError ? styles.error : ''}`}>
            <div>{children}</div>
            {isError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea
                {...input}
                {...restProps}
            />
        </FormControl>
    );
};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input
                {...input}
                {...restProps}
            />
        </FormControl>
    );
};

export const CreateField = (name: string, placeholder: string | null, component: (props: any) => JSX.Element, validator: any, props = {}, text = '') => {
    return (
        <div>
            <Field
                name={name}
                placeholder={placeholder}
                component={component}
                validate={[validator]}
                {...props}
            >
                {text}
            </Field>
        </div>
    );
};

