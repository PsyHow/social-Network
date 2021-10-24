import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {UsersReducer} from "./usersReducer";


const rootReducer = combineReducers  ({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:UsersReducer
    //sidebarReducer
});


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store
