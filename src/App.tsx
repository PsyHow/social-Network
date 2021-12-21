import { Component, ComponentType } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { AppStateType, initializeApp } from 'BLL';
import {
  UserContainerFunc,
  ProfileContainerFunc,
  DialogsContainer,
  HeaderContainerFunc,
  LoginContainer,
  Music,
  Nav,
  News,
  Preloader,
  Settings,
} from 'components';
import { ROUTING_PATH } from 'enums';

class App extends Component<AppPropsType> {
  componentDidMount() {
    const { initializeApp } = this.props;
    initializeApp();
  }

  render() {
    const { initialized } = this.props;
    if (!initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainerFunc />
        <Nav />
        <div className="app-wrapper-content">
          <Route path={ROUTING_PATH.DIALOGS} render={() => <DialogsContainer />} />
          <Route
            path={`${ROUTING_PATH.PROFILE}:userId?`}
            render={() => <ProfileContainerFunc />}
          />
          <Route path={ROUTING_PATH.USERS} render={() => <UserContainerFunc />} />
          <Route path={ROUTING_PATH.NEWS} component={News} />
          <Route path={ROUTING_PATH.SETTINGS} component={Settings} />
          <Route path={ROUTING_PATH.MUSIC} component={Music} />
          <Route path={ROUTING_PATH.LOGIN} render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.initialized,
});

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App);

// types
type MapDispatchToPropsType = {
  initializeApp: () => void;
};
type MapStateToPropsType = {
  initialized: boolean;
};
type AppPropsType = MapDispatchToPropsType & MapStateToPropsType;
