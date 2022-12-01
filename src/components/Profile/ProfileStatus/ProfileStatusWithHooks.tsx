import React, {ChangeEvent, useEffect, useState} from 'react';

export type PropsType = {
    profile: any;
    status: string;
    updateUserStatusTC: (status: string) => void;
};

const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatusTC(status);
    };
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}
                    >{props.status || 'NO STATUS AT THE MOMENT'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        value={status}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;