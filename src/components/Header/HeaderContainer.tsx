import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {authUser} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

type MapDispatchToPropsType = {
    authUser: () => void
}
type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.authUser()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}/>
        )
    }

}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {authUser})(HeaderContainer);