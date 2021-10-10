import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


const rootReducer = combineReducers  ({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    //sidebarReducer
});


export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
