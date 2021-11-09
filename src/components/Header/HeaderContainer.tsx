import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {AppStateType} from "../../Redux/redux-store";
import {authMe} from "../../Redux/authReducer";

type MapDispatchToPropsType = {
    authMe: () => void
}
type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.authMe()
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


export default connect(mapStateToProps, {authMe})(HeaderContainer);