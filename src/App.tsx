import { Component, ComponentType } from 'react';

import 'antd/dist/antd.css';
import './App.css';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { AppStateType, initializeApp } from 'BLL';
import {
  Header,
  Music,
  News,
  Preloader,
  Settings,
  UserContainerFunc,
  DialogsContainer,
  LoginContainer,
  ProfileContainer,
} from 'components';
import { ROUTING_PATH } from 'enums';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

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
      <Layout>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu mode="inline" style={{ height: '100%' }}>
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                  <Menu.Item key="1">
                    <Link to={ROUTING_PATH.PROFILE}>Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to={ROUTING_PATH.DIALOGS}>Messages</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to={ROUTING_PATH.NEWS}>News</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
                  <Menu.Item key="5">
                    <Link to={ROUTING_PATH.USERS}>Users</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Route path={ROUTING_PATH.DIALOGS} render={() => <DialogsContainer />} />
              <Route
                path={`${ROUTING_PATH.PROFILE}:userId?`}
                render={() => <ProfileContainer />}
              />
              <Route path={ROUTING_PATH.LOGIN} render={() => <LoginContainer />} />
              <Route path={ROUTING_PATH.USERS} render={() => <UserContainerFunc />} />
              <Route path={ROUTING_PATH.NEWS} component={News} />
              <Route path={ROUTING_PATH.SETTINGS} component={Settings} />
              <Route path={ROUTING_PATH.MUSIC} component={Music} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
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
