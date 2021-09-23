import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Settings} from './components/Settings/Settings';
import {Music} from "./components/Music/Music";
import {StoreType} from "./Redux/State";



export const SiteBar = () => {
    return (
        <div className={'sitebar'}>
            <h2>Friends</h2>
            <img src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <div>Andrei</div>
            <img src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <div>Andrei</div>
            <img src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <div>Andrei</div>
        </div>
    )
}

type PropsType = {
    store:StoreType
}

const App = (props:PropsType) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.store}/>}/>
                    <Route path={'/profile'} render={() => <Profile state={props.store}
                                                                    addPost={props.store.addPost.bind(props.store)}
                                                                    PostText={props.store._state.profilePage.postText}
                                                                    changePostText={props.store.changePostText.bind(props.store)}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/music'} component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
