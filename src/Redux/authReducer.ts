import { authAPI } from "../api/Api";

type setUserDataACType = ReturnType<typeof setAuthUserData>
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

export const authReducer = (state: InitialStateType = initialState, action: setUserDataACType): InitialStateType => {
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
export const authMe = () => {
    return (dispatch: any) => {
        authAPI.authMe()
               .then(data => {
                   if(data.resultCode === 0) {
                       const { email, login, id } = data.data
                       dispatch(setAuthUserData(id, email, login, true))
                   }
               })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
               .then((res) => {
                   if(res.data.resultCode === 0) {
                       dispatch(authMe())
                   }
               })
    }
}

export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout()
               .then((res) => {
                   if(res.data.resultCode === 0) {
                       dispatch(setAuthUserData(null, null, null, false))
                   }
               })
    }
}