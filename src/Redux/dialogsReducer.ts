import { v1 }                        from "uuid";
import { DialogsType, MessagesType } from "../types/types";

const initialState = {
    dialogs: [
        { id: v1(), name: "Roman" },
        { id: v1(), name: "Romazan" },
        { id: v1(), name: "Diyar" },
        { id: v1(), name: "Ilyas" },
        { id: v1(), name: "Viktor" },
    ] as Array<DialogsType>,
    messages: [
        { id: v1(), message: "Hi" },
        { id: v1(), message: "Hello" },
        { id: v1(), message: "Yopta" },
        { id: v1(), message: "Ku" },
        { id: v1(), message: "Cho kogo?" },
    ] as Array<MessagesType>,
}

export const dialogsReducer = (state = initialState, action: DialogsPageActionType): InitialStateType => {
    switch (action.type) {
        case "DIALOGS/SEND_MESSAGE" :
            return {
                ...state,
                messages: [...state.messages, { id: v1(), message: action.newMessageBody }],
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody: string) => ( { type: "DIALOGS/SEND_MESSAGE", newMessageBody } as const )

//types
export type DialogsPageActionType = ReturnType<typeof sendMessage>
type InitialStateType = typeof initialState
