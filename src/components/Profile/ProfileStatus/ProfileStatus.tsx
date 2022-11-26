import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

type PropsType = {
    profile: any
    status: any
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    };

    componentDidMount() {
        if (!this.props.profile) return <Preloader/>;
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode.bind(this)}
                        >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            value={this.props.status}
                            onBlur={this.deactivateEditMode.bind(this)}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;