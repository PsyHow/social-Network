import { getAuthUserData } from "./authReducer";
import { AppThunkType }    from "./redux-store";

const initialState = {
    initialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
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

export const initializeApp = (): AppThunkType =>  (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


type InitialStateType = typeof initialState
type AppActionType = ReturnType<typeof initializedSuccess>