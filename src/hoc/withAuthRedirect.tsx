import { ComponentType, FC } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { AppStateType } from 'BLL';

type MapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent: FC<MapStateToPropsType> = ({ isAuth, ...restProps }) => {
    if (!isAuth) return <Redirect to="/login" />;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...(restProps as T)} />;
  };

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
}
