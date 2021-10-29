import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {setAuthUserData} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

type ResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}

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
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {email, login, id} = response.data.data
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