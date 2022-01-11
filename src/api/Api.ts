import axios from 'axios';

import {
  AuthUserType,
  FollowUnfollowType,
  GetCaptchaUrlResponseType,
  LoginRequestType,
  StatusResponseType,
  UserResponseType,
} from 'api';
import { APIResponseType, SavePhotoResponseType } from 'api/api_types/api_types';
import { UserProfileType } from 'types';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'b7b7629a-058d-4df6-866c-6165a8a8aade',
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  unfollowUser(id: number) {
    return instance
      .delete<FollowUnfollowType>(`follow/${id}`)
      .then(response => response.data);
  },

  followUser(id: number) {
    return instance
      .post<FollowUnfollowType>(`follow/${id}`)
      .then(response => response.data);
  },
};

export const profileAPI = {
  setUserProfile(userId: number) {
    return instance
      .get<UserProfileType>(`profile/${userId}`)
      .then(response => response.data);
  },

  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },

  updateStatus(status: string) {
    return instance.put<StatusResponseType>('profile/status', { status });
  },

  savePhoto(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return instance
      .put<APIResponseType<SavePhotoResponseType>>('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data);
  },

  saveProfile(profile: UserProfileType) {
    return instance.put<APIResponseType>('profile', profile).then(res => res.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get<AuthUserType>(`auth/me`).then(response => response.data);
  },

  login(email: string, password: string, rememberMe: boolean, captcha: string) {
    return instance.post<LoginRequestType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },

  logout() {
    return instance.delete<LoginRequestType>(`/auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchaUrlResponseType>('security/get-captcha-url')
      .then(res => res.data);
  },
};
