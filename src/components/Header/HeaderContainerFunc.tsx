import { PureComponent } from 'react';

import { connect } from 'react-redux';

import { Header } from './Header';

import { logout, AppStateType } from 'BLL';
import { getIsAuth, getLogin } from 'selectors';
import { Nullable } from 'types';

class HeaderContainer extends PureComponent<AuthPropsType> {
  render() {
    const { isAuth, login, logout } = this.props;
    return <Header isAuth={isAuth} login={login} logout={logout} />;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});

export const HeaderContainerFunc = connect(mapStateToProps, { logout })(HeaderContainer);

// types
type MapDispatchToPropsType = {
  logout: () => void;
};
type MapStateToPropsType = {
  isAuth: boolean;
  login: Nullable<string>;
};
type AuthPropsType = MapDispatchToPropsType & MapStateToPropsType;
