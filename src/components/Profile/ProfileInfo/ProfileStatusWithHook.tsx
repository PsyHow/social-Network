import React, { ChangeEvent, useState } from "react";


export const ProfileStatusWithHooks = ({ status, updateStatus }: PropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [myStatus, setMyStatus] = useState(status)

    const activateMode = () => { setEditMode(true) };

    const diactivateMode = () => {
        setEditMode(false)
        updateStatus(myStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMyStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div style={ { marginTop: '20px' } }>
                <span onDoubleClick={ activateMode }>{ status || 'Enter your status' }</span>
            </div>
            }
            { editMode &&
            <div style={ { marginTop: '20px' } }>
                <input onBlur={ diactivateMode }
                       autoFocus={ true }
                       onChange={ onStatusChange }
                       value={ myStatus }/>
            </div>
            }
        </div>
    )
}

//types
type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
