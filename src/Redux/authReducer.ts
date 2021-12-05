import { stopSubmit } from "redux-form";
import { authAPI } from "../api/Api";
import { AppThunkType } from "./redux-store";


const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
}

export const authReducer = (state = initialState, action: SetUserDataACType): InitialStateType => {
    switch (action.type) {
        case"AUTH/SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return { type: "AUTH/SET_USER_DATA", payload: { id, email, login, isAuth } }
}


//thunk
export const getAuthUserData = (): AppThunkType =>
    async (dispatch) => {
        const response = await authAPI.authMe();

        if(response.resultCode === 0) {
            const { email, login, id } = response.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType =>
    async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe);

        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    }

export const logout = (): AppThunkType =>
    async (dispatch) => {
        const response = await authAPI.logout()

        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

//types
export type SetUserDataACType = ReturnType<typeof setAuthUserData>
type InitialStateType = typeof initialState