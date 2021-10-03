import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Settings} from './components/Settings/Settings';
import {Music} from "./components/Music/Music";
import {ActionsType} from "./Redux/state";
import {StoreType} from "./Redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export const SiteBar = () => {
    return (
        <div className={'sitebar'}>
            <h2>Friends</h2>
            <img
                src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <div>Andrei</div>
            <img
                src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <div>Andrei</div>
            <img
                src={'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png'}/>
            <div>Andrei</div>
        </div>
    )
}

type PropsType = {
    store: StoreType
}

const App = (props: PropsType) => {
    debugger
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() =>
                               <DialogsContainer store={props.store}/>}/>

                    <Route path={'/profile'}
                           render={() => <Profile store={props.store}/>}/>


                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/music'} component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
