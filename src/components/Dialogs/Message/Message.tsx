import React from "react";
import style from "../Dialogs.module.css"


type messagesType = {
    id:string
    message:string
}


export const Message = (props: messagesType) => {
    return(
            <div>
                <div className={style.message}>{props.message}</div>
            </div>
    )
}

