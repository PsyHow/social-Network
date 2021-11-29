import React            from "react";
import { Header }       from "./Header";
import { connect }      from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { logout }       from "../../Redux/authReducer";


class HeaderContainer extends React.Component<AuthPropsType> {

    render() {
        return (
            <Header { ...this.props }/>
        )
    }

}

const mapStateToProps = (state: AppStateType) => ( {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
} )

export default connect(mapStateToProps, { logout })(HeaderContainer);

//types
type MapDispatchToPropsType = {
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType