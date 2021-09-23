type postType = {
    id: number
    message: string
    likesCount: number
}
type dialogType = {
    id: number
    name: string
    //avatar: string
}
type messagesType = {
    id: number
    message: string
}
type dialogsPageType = {
    dialogs: Array<dialogType>
    messages: Array<messagesType>
}
export type profilePageType = {
    post: Array<postType>
    postText: string
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sideBar: SidebarType
}
type SidebarType = {}

 type AddPostActionType = {
    type: 'ADD-POST'
}
 type ChangePostActionTextType = {
    type: 'CHANGE-POST-TEXT'
    newPostText: string
}
export type ActionsType = AddPostActionType | ChangePostActionTextType

export type StoreType = {
    _state: RootStateType
    dispatch: (action: ActionsType) => void
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

export let store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 30},
                {id: 3, message: 'Yo', likesCount: 40},
                {id: 4, message: 'Mu-a-ha-ha', likesCount: 606}
            ],
            postText: ' '
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Aliya Sladkaya'},
                {id: 2, name: 'Roman'},
                {id: 3, name: 'Romazan'},
                {id: 4, name: 'Diyar'},
                {id: 5, name: 'Ilyas'},
                {id: 6, name: 'Viktor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yopta'},
                {id: 4, message: 'Ku'},
                {id: 5, message: 'Cho kogo?'}
            ]

        },
        sideBar: {}
    },
    getState() {
        return this._state
    },
    callSubscriber() {
        console.log('State is changed')
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: postType = {
                id: 6,
                message: this._state.profilePage.postText,
                likesCount: 0
            }
            this._state.profilePage.post.push(newPost)
            this.callSubscriber()
        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.postText = action.newPostText
            this.callSubscriber()
        }
    }

}
//action это объект(действие) который описывает какое действие
//совершить { type: 'ADD-POST' }