import { AppActionType, InitialStateType } from 'BLL/appReducer/Types';

export const initialState = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionType,
): InitialStateType => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return { ...state, initialized: true };
    default:
      return state;
  }
};
