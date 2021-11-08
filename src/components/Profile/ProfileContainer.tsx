import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {SetUserProfile, UserProfileType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";

type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    SetUserProfile:(userId:string)=> void
}

type MapStateToPropsType = {
    profile: null | UserProfileType
}

type PathParamsType = {
    userId:string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
const mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        this.props.SetUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }

}
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,{SetUserProfile})(WithUrlDataContainerComponent)