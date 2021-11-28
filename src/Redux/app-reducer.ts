import { getAuthUserData } from "./authReducer";

const initialState = {
    initialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ( { type: "SET_INITIALIZED" } as const )

export const initializeApp = () =>  (dispatch:any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof initializedSuccess>