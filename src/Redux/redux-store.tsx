import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {UsersReducer} from "./usersReducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form"


const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
    //sidebarReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
