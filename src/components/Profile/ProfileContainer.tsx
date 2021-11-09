import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {SetUserProfile, UserProfileType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {Redirect} from "react-router-dom";

type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    SetUserProfile: (userId: string) => void
}

type MapStateToPropsType = {
    profile: null | UserProfileType
    isAuth: boolean
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.SetUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile profile={this.props.profile}/>
        )
    }

}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {SetUserProfile})(WithUrlDataContainerComponent)