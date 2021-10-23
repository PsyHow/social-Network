import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../Dialogs.module.css'


type propsType = {
    id:string
    name:string
}

export const DialogsItem = (props: propsType) => {
    const path = '/dialogs/' + props.id;

    return (
        <div className={styles.dialog}>
            <img src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <NavLink activeClassName={styles.active} to={path}>{props.name}</NavLink>
        </div>
    )
};
