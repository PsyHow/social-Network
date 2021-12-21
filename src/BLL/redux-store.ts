import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk, { ThunkAction } from 'redux-thunk';

import { AppActionType } from './appReducer/Types';
import { DialogsPageActionType } from './dialogs_reducer/Types';
import { ProfileActionType } from './profileReducer/Types';
import { UsersActionType } from './userReducer/Types';

import { appReducer } from 'BLL/appReducer/appReducer';
import { authReducer } from 'BLL/authReducer/authReducer';
import { SetUserDataACType } from 'BLL/authReducer/Types';
import { dialogsReducer } from 'BLL/dialogs_reducer/dialogsReducer';
import { profileReducer } from 'BLL/profileReducer/profileReducer';
import { UsersReducer } from 'BLL/userReducer/usersReducer';

const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: UsersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;
export type ActionsType =
  | SetUserDataACType
  | DialogsPageActionType
  | ProfileActionType
  | UsersActionType
  | AppActionType;
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  ActionsType
>;

// @ts-ignore
window.store = store;
