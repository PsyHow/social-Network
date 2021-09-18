import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'


type propsType = {
    id:number
    name:string
}

export const DialogsItem = (props: propsType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <img src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
};
