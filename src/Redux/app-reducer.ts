import { getAuthUserData } from "./authReducer";
import { AppThunkType }    from "./redux-store";

const initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return { ...state, initialized: true }
        default:
            return state
    }
}


export const initializedSuccess = () => ( { type: "SET_INITIALIZED" } as const )

//thunk
export const initializeApp = (): AppThunkType =>
    (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }

//types
type InitialStateType = typeof initialState
export type AppActionType = ReturnType<typeof initializedSuccess>