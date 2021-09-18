import React from "react";
import s from '../Dialogs.module.css'


type messagesType = {
    id:number
    message:string
}


export const Message = (props: messagesType) => {
    return(
            <div>
                <div className={s.message}>{props.message}</div>
                <div className={s.answer}>...</div>
            </div>
    )
}

