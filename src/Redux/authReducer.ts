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
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: setUserDataACType): InitialStateType => {
    switch (action.type) {
        case"SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => {
    return {type: 'SET_USER_DATA', data: {id, email, login}}
}

type setUserDataACType = ReturnType<typeof setAuthUserData>