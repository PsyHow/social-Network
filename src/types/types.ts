import { Nullable } from 'types/Nullable';

export type UserProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};
export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type PhotosType = {
  small: Nullable<string>;
  large: Nullable<string>;
};
export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export type UsersType = {
  name: string;
  id: number;
  uniqueUrlName: Nullable<string>;
  photos: PhotosType;
  status: Nullable<string>;
  followed: any;
  location?: { city: string; country: string };
};

export type DialogsType = {
  id: string;
  name: string;
};
export type MessagesType = {
  id: string;
  message: string;
};
