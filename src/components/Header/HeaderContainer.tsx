import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {setAuthUserData} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";
import {usersAPI} from "../../API/Api";

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}
type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}

type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        usersAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    const {email, login, id} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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



export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);