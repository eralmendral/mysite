import React from "react";
import { withRouter, Link } from "react-router-dom";
import { firebaseApp } from "../../../config/fbConfig";

import { Layout, Menu } from "antd";
import logo from "./ea.png";

import {
  DesktopOutlined,
  PieChartOutlined,
  ContactsOutlined,
  GlobalOutlined,
  MailOutlined,
  CarryOutOutlined,
  LogoutOutlined,
  GithubOutlined,
  RadarChartOutlined,
  FileProtectOutlined
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
        <img
          src={logo}
          className="img-fluid"
          alt="logo"
          style={{ filter: "saturate(.5)" }}
        />
      </div>
      <div className="sidebar">
        <Menu
          className="bg-evil"
          theme="dark"
          defaultSelectedKeys={["2"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<GlobalOutlined />}>
            <Link to="/">Site</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link to="/dashboard/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContactsOutlined />}>
            <Link to="/dashboard/clients">Clients</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<MailOutlined />}>
            <Link to="/dashboard/clients">Messages</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<CarryOutOutlined />}>
            <Link to="/dashboard/clients">Work XP</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<GithubOutlined />}>
            <Link to="/dashboard/clients">Contributions</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<RadarChartOutlined />}>
            <Link to="/dashboard/clients">Skills</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileProtectOutlined />}>
            <Link to="/dashboard/clients">Certifications</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
}

export default withRouter(Sidebar);
