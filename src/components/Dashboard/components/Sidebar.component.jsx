import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import logo from './ea.png';

import {
  DesktopOutlined,
  PieChartOutlined,
  SmileOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
function Sidebar(props) {
  const [collapse, setCollapse] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapse(collapsed);
  };

  const logout = () => {
    props.history.push("/");
  };

  return (
    <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
      <div className="logo" style={{height: 'auto'}}>
      <img src={logo} className="img-fluid" alt="logo"/>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
    </Sider>
  );
}

export default withRouter(Sidebar);
