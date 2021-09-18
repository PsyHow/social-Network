let rerenderEntireTree = () => {
    console.log('State is changed')
}

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
    sideBar:SidebarType
}


type SidebarType = {

}

export const state: RootStateType = {
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
}




export const addPost = (postText: string) => {
    const newPost:postType = {
        id: 6,
        message: postText,
        likesCount: 0
    }
    state.profilePage.post.push(newPost)
    rerenderEntireTree()
}

export const changePostText = (NewPostText: string) => {
    state.profilePage.postText = NewPostText
    rerenderEntireTree()
}

export const subscribe = (observer: ()=> void) => { //fix any
    rerenderEntireTree = observer
}
