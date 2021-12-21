import { initializedSuccess } from 'BLL/appReducer/Actions';
import { getAuthUserData } from 'BLL/authReducer/Thunk';
import { AppThunkType } from 'BLL/redux-store';

export const initializeApp = (): AppThunkType => dispatch => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
