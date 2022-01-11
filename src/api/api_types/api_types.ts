import { PhotosType, UsersType } from 'types';

export type LoginRequestType = {
  resultCode: number;
  messages: string[];
  data: {
    userId: string;
  };
};
export type FollowUnfollowType = {
  resultCode: number;
  messages: string;
  data: {};
};
export type AuthUserType = {
  resultCode: number;
  messages: [];
  data: {
    id: number;
    email: string;
    login: string;
  };
};
export type UserResponseType = {
  items: UsersType[];
  totalCount: number;
  error: string;
};
export type StatusResponseType = {
  resultCode: number;
  messages: string[];
  data: {};
};

export type SavePhotoResponseType = {
  resultCode: number;
  messages: string[];
  photos: PhotosType;
};
