import { sendMessage }               from "../../Redux/dialogsReducer";
import { Dialogs }                   from "./Dialogs";
import { connect }                   from "react-redux";
import { AppStateType }              from "../../Redux/redux-store";
import { ComponentType }             from "react";
import { withAuthRedirect }          from "../../hoc/withAuthRedirect";
import { compose }                   from "redux";
import { DialogsType, MessagesType } from "../../types/types";


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
// important type compose with generic <React.ComponentType>
export default compose<ComponentType>(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect,
)(Dialogs)

//types
type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}