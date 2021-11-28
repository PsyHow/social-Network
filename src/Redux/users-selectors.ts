import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => ( state.usersPage.users )

export const getPageSize = (state: AppStateType) => ( state.usersPage.pageSize )

export const totalUsersCount = (state: AppStateType) => ( state.usersPage.totalUsersCount )

export const currentPage = (state: AppStateType) => ( state.usersPage.currentPage )

export const isFetching = (state: AppStateType) => ( state.usersPage.isFetching )

export const followingProgress = (state: AppStateType) => ( state.usersPage.followingProgress )