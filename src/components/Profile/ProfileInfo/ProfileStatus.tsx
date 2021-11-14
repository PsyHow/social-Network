import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        //setState асинхронный !!!
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Enter your status'}</span>
                </div>}
                {this.state.editMode
                && <div>
                    <input autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           onChange={this.onStatusChange}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;