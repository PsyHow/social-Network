import axios from "axios";
import {UsersType} from "../Redux/usersReducer";
import {UserProfileType} from "../Redux/profileReducer";

type FollowUnfollowType = {
    resultCode: number
    messages: string,
    data: {}

}
export type AuthUserType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}
export type UserResponseType = {
    items: UsersType[]
    totalCount: number
    error: string
}

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b7b7629a-058d-4df6-866c-6165a8a8aade'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete<FollowUnfollowType>(`follow/${id}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance.post<FollowUnfollowType>(`follow/${id}`)
            .then(response => response.data)
    },
    authUser() {
        return instance.get<AuthUserType>(`auth/me`)
            .then(response => response.data)
    },
    setUserProfile(userId:string) {
        return instance.get<UserProfileType>(`profile/` + userId)
            .then(response => response.data)
    }
}

