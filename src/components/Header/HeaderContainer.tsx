import React              from 'react';
import Header             from "./Header";
import { connect }        from 'react-redux';
import { AppStateType }   from "../../Redux/redux-store";
import { authMe, logout } from "../../Redux/authReducer";

type MapDispatchToPropsType = {
    authMe: () => void
    logout: () => void
}
type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType) => ( {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
} )

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount(){
        this.props.authMe()
    }

    render(){
        return (
            <Header isAuth={ this.props.isAuth }
                    login={ this.props.login }
                    logout={ this.props.logout }/>
        )
    }

}

export default connect(mapStateToProps, { authMe, logout })(HeaderContainer);