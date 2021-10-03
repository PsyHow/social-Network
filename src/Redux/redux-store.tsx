import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


const reducers = combineReducers  ({
    dialogsReducer:dialogsReducer,
    profileReducer:profileReducer,
    //sidebarReducer
});


export const store = createStore(reducers);

export type StoreType = typeof store