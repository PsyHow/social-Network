import React from "react";
import styles from '../Dialogs.module.css'


type messagesType = {
    id:string
    message:string
}


export const Message = (props: messagesType) => {
    return(
            <div>
                <div className={styles.message}>{props.message}</div>
            </div>
    )
}

