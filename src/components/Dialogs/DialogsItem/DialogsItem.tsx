import React       from "react";
import { NavLink } from "react-router-dom";
import style       from "../Dialogs.module.css"


export const DialogsItem = (props: propsType) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={ style.dialog }>
            <img
                src={ "https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png" }/>
            <NavLink activeClassName={ style.active } to={ path }>{ props.name }</NavLink>
        </div>
    )
}

//types
type propsType = {
    id: string
    name: string
}
