import React, { ComponentType } from "react";
import "./App.css";
import { Nav }                  from "./components/Navigation/Navigation";
import { Route, withRouter }    from "react-router-dom";
import { News }                 from "./components/News/News";
import { Settings }             from "./components/Settings/Settings";
import { Music }                from "./components/Music/Music";
import DialogsContainer         from "./components/Dialogs/DialogsContainer";
import UsersContainer           from "./components/Users/UsersContainer";
import ProfileContainer         from "./components/Profile/ProfileContainer";
import HeaderContainer          from "./components/Header/HeaderContainer";
import Login                    from "./components/login/Login";
import { connect }      from "react-redux";
import { AppStateType } from "./Redux/redux-store";
import { Preloader }    from "./components/common/Preloader/Preloader";
import { compose }              from "redux";
import { initializeApp }        from "./Redux/app-reducer";


export const SiteBar = () => {
    return (
        <div className={ 'sitebar' }>
            <h2>Friends</h2>
            <img
                src={ 'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png' }/>
            <div>Andrei</div>
            <img
                src={ 'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png' }/>
            <div>Andrei</div>
            <img
                src={ 'https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png' }/>
            <div>Andrei</div>
        </div>
    )
}


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={ 'app-wrapper' }>
                <HeaderContainer/>
                <Nav/>
                <div className={ 'app-wrapper-content' }>
                    <Route path={ '/dialogs' } render={ () => <DialogsContainer/> }/>
                    <Route path={ '/profile/:userId?' } render={ () => <ProfileContainer/> }/>
                    <Route path={ '/users' } render={ () => <UsersContainer/> }/>
                    <Route path={ '/news' } component={ News }/>
                    <Route path={ '/settings' } component={ Settings }/>
                    <Route path={ '/music' } component={ Music }/>
                    <Route path={ '/login' } render={ () => <Login/> }/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ( {
    initialized: state.app.initialized,
} )

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeApp }),
)(App)

//types
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

