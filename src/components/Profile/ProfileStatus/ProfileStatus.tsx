import React, {ChangeEvent} from 'react';
import Preloader from '../../common/Preloader/Preloader';

export type PropsType = {
    profile: any;
    status: string;
    updateUserStatusTC: (status: string) => void;
};

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidMount() {
        if (!this.props.profile) return <Preloader/>;
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatusTC(this.state.status);
    };

    onChangeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: event.currentTarget.value});
    };

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}
                        >{this.props.status || 'NO STATUS AT THE MOMENT'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onChangeStatusHandler}
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;