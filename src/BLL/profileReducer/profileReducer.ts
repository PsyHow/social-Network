import { InitialStateType, ProfileActionType } from 'BLL';
import { Nullable, PostType, UserProfileType } from 'types';

export const initialState = {
  post: [
    { id: 1, message: 'Hello', likesCount: 12 },
    { id: 2, message: 'Its my first post', likesCount: 30 },
    { id: 3, message: 'Yo', likesCount: 40 },
    { id: 4, message: 'Mu-a-ha-ha', likesCount: 606 },
  ] as PostType[],
  profile: null as Nullable<UserProfileType>,
  status: '',
  newPostText: '',
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionType,
): InitialStateType => {
  switch (action.type) {
    case 'PROFILE/ADD_POST':
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: 5,
            message: action.newPostMessage,
            likesCount: 0,
          },
        ],
        newPostText: ' ',
      };
    case 'PROFILE/SET_USER_PROFILE':
      return { ...state, profile: action.profile };
    case 'PROFILE/SET_STATUS':
      return { ...state, status: action.status };
    case 'PROFILE/DELETE_POST':
      return {
        ...state,
        post: state.post.filter(p => p.id !== action.id),
      };
    case 'PROFILE/SAVE_PHOTO/SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as UserProfileType,
      };
    default:
      return state;
  }
};
