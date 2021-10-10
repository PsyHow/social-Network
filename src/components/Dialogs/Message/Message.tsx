import React from "react";
import s from '../Dialogs.module.css'


type messagesType = {
    id:string
    message:string
}


export const Message = (props: messagesType) => {
    return(
            <div>
                <div className={s.message}>{props.message}</div>
            </div>
    )
}

