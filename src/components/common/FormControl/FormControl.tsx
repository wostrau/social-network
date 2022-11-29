import React from 'react';
import styles from './FormControl.module.css';

const FormControl = ({input, meta, child, ...props}: any) => {
    const isError = meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${isError ? styles.error : ''}`}>
            <div>{props.children}</div>
            {isError && <span>{meta.error}</span>}
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

