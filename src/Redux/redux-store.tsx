import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer, SetUserDataACType} from "./authReducer";
import {DialogsPageActionType, dialogsReducer} from "./dialogsReducer";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {UsersActionType, UsersReducer} from "./usersReducer";
import thunk, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
    //sidebarReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionType = SetUserDataACType | DialogsPageActionType | ProfileActionType | UsersActionType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionType>


// @ts-ignore
window.store = store
