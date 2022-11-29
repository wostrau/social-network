import {maxLengthVC, minLengthVC, requiredField} from '../../../utilities/validators/validators';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormControl/FormControl';
import React from 'react';

const AddMessageForm = (props: any) => {
    const maxLength100 = maxLengthVC(100);
    const minLength1 = minLengthVC(1);

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[
                        requiredField,
                        maxLength100,
                        minLength1
                    ]}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    );
};

export const AddMessageFormRedux = reduxForm({
    form: 'DialogAddMessageFormRedux'
})(AddMessageForm);
