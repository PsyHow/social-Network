import React, { ChangeEvent } from "react";


class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        //setState асинхронный !!!
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        console.log('render')
        return (
            <div>
                { !this.state.editMode
                && <div style={ { marginTop: '20px' } }>
                    <span onDoubleClick={ this.activateEditMode }>{ this.props.status || 'Enter your status' }</span>
                </div> }
                { this.state.editMode
                && <div style={ { marginTop: '20px' } }>
                    <input autoFocus={ true }
                           onBlur={ this.deactivateEditMode }
                           value={ this.state.status }
                           onChange={ this.onStatusChange }/>
                </div>
                }
            </div>
        )
    }
}

//types
type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export default ProfileStatus;