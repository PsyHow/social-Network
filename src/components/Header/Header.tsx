import { FC } from 'react';

import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from 'BLL';
import { ROUTING_PATH } from 'enums';
import { selectIsAuth, selectLogin } from 'selectors';

export const Header: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  const { Header } = Layout;

  const logoutHandle = () => {
    dispatch(logout());
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to={ROUTING_PATH.USERS}>Users</Link>
            </Menu.Item>
          </Menu>
        </Col>

        {isAuth ? (
          <>
            <Col span={2}>
              <Avatar alt={login || ''} size={40}>
                Daddy
              </Avatar>
            </Col>
            <Col span={4}>
              <Button onClick={logoutHandle}>Log out</Button>
            </Col>
          </>
        ) : (
          <Col span={6}>
            <Button>
              <Link to={ROUTING_PATH.LOGIN}>Login</Link>
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );
};
