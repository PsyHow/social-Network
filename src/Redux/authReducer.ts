import { stopSubmit }   from "redux-form";
import { authAPI }      from "../api/Api";
import { AppThunkType } from "./redux-store";

export type SetUserDataACType = ReturnType<typeof setAuthUserData>
type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: SetUserDataACType): InitialStateType => {
    switch (action.type) {
        case"SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return { type: 'SET_USER_DATA', payload: { id, email, login, isAuth } }
}

//thunk
export const getAuthUserData = (): AppThunkType => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if(data.resultCode === 0) {
                const { email, login, id } = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType =>
    (dispatch:any) => {
        authAPI.login(email, password, rememberMe)
            .then((res) => {
                if(res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
                else {
                    const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
                    dispatch(stopSubmit('login', { _error: message }))
                }
            })
    }

export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout()
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}