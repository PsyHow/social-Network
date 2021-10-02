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
import {ActionsType} from "./Redux/state";
import {AppStateType} from "./Redux/redux-store";


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
    state: AppStateType
    dispatch:(action: ActionsType) => void
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
                           render={() => <Dialogs
                               store={props.state}
                               dispatch={props.dispatch}
                               />}
                    />

                    <Route path={'/profile'}
                           render={() => <Profile state={props.state}
                                                  dispatch={props.dispatch}/>}/>

                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/music'} component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
