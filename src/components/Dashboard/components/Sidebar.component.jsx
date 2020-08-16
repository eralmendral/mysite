import React from "react";
import { withRouter, Link } from "react-router-dom";
import { firebaseApp } from '../../../config/fbConfig';

import { Layout, Menu } from "antd";
import logo from "./ea.png";

import {
  DesktopOutlined,
  PieChartOutlined,
  SmileOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function Sidebar({ history }) {
  const logout = () => {
    firebaseApp.auth().signOut();
    history.push("/");
  };

  return (
    <Sider className="bg-evil">
      <div className="logo" style={{ height: "auto" }}>
        <img src={logo} className="img-fluid" alt="logo" />
      </div>
      <div className="sidebar">
        <Menu
          className="bg-evil"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/dashboard/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SmileOutlined />}>
            <Link to="/dashboard/clients">Clients</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<GlobalOutlined />}>
            <Link to="/dashboard/website">Settings</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
}

export default withRouter(Sidebar);
