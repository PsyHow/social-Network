import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer, SetUserDataACType }                from "./authReducer";
import { DialogsPageActionType, dialogsReducer }         from "./dialogsReducer";
import { ProfileActionType, profileReducer }             from "./profileReducer";
import { UsersActionType, UsersReducer }                 from "./usersReducer";
import thunk, { ThunkAction }                            from "redux-thunk"
import { reducer as formReducer }                        from "redux-form"
import { AppActionType, appReducer }                     from "./app-reducer";


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
    //sideBarReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>
export type ActionsType = SetUserDataACType
    | DialogsPageActionType
    | ProfileActionType
    | UsersActionType
    | AppActionType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    ActionsType>


// @ts-ignore
window.store = store
