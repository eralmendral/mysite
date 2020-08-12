import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import "./dashboard.scss";
import Sidebar from "./components/Sidebar.component";

import ProjectList from "./subpages/projects/ProjectList";
import ClientList from './subpages/clients/ClientList'
import DashboardHome from "./subpages/home/DashboardHome";

const { Header, Content } = Layout;
class SiderDemo extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <br/>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route exact path={`${this.props.match.url}`} component={DashboardHome} />

                <Route path={`${this.props.match.url}/projects`} component={ProjectList} />
                <Route path={`${this.props.match.url}/projects/add`} component={ProjectList} />
                <Route path={`${this.props.match.url}/projects/edit/:projectId`} component={ProjectList} />
                <Route path={`${this.props.match.url}/projects/:projectId`} component={this.projects} />

                <Route path={`${this.props.match.url}/clients`} component={ClientList} />
                <Route path={`${this.props.match.url}/clients/add`} component={ClientList} />
                <Route path={`${this.props.match.url}/clients/edit/:clientId`} component={ClientList} />
                <Route path={`${this.props.match.url}/clients/:clientId`} component={this.projects} />

                <Route path={`${this.props.match.url}/settings`} component={ProjectList} />
                <Redirect from="*" to='/' />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
