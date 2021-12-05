import React, { ComponentType } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getStatus, SetUserProfile, updateStatus } from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from 'redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { UserProfileType } from "../../types/types";

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        const { match, authorizedUserId, SetUserProfile, getStatus, history } = this.props;

        let userId = match.params.userId
        if(!userId) {
            userId = JSON.stringify(authorizedUserId)
            if(!userId) {
                history.push("/login")
            }
        }
        SetUserProfile(userId)
        getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={ this.props.profile }
                         status={ this.props.status }
                         updateStatus={ this.props.updateStatus }/>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

// important type compose with generic <React.ComponentType>
export default compose<ComponentType>(
    connect(mapStateToProps, { SetUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

//types
type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = {
    SetUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type MapStateToPropsType = {
    profile: null | UserProfileType
    status: string
    authorizedUserId: null | number
    isAuth: boolean
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType