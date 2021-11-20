import { DialogsType, MessagesType, sendMessage } from "../../Redux/dialogsReducer";
import { Dialogs }                                from "./Dialogs";
import { connect }                                from "react-redux";
import { AppStateType }                           from "../../Redux/redux-store";
import React                                      from "react";
import { withAuthRedirect }                       from "../../hoc/withAuthRedirect";
import { compose }                                from "redux";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
// important type compose with generic <React.ComponentType>
export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)