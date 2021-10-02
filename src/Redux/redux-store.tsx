import {combineReducers, createStore, Store } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


const reducers = combineReducers  ({
    dialogsReducer:dialogsReducer,
    profileReducer:profileReducer,
    //sidebarReducer
});


export const store : AppStateType = createStore(reducers);

export type AppStateType = Store & ReturnType<typeof reducers>