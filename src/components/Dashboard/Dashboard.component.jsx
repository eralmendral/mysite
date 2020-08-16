import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "./dashboard.scss";
import 'react-toastify/dist/ReactToastify.css';

import DashboardHome from "./subpages/home/DashboardHome";
import Sidebar from "./components/Sidebar.component";
import ClientList from './subpages/clients/ClientList'
import ClientAddEdit from './subpages/clients/ClientAddEdit';

import ProjectList from "./subpages/projects/ProjectList";
import ProjectAddEdit from "./subpages/projects/ProjectAddEdit";

import  SettingsComponent from './subpages/settings/Settings';
const { Header, Content } = Layout;
class Dashboard extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar className="bg-danger" />
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
                <Route exact path={`${this.props.match.url}/projects`} component={ProjectList} />
                <Route path={`${this.props.match.url}/projects/add`} component={ProjectAddEdit} />
                <Route path={`${this.props.match.url}/projects/edit/:projectId`} component={ProjectList} />
                <Route path={`${this.props.match.url}/projects/:projectId`} component={this.projects} />

                <Route exact path={`${this.props.match.url}/clients`} component={ClientList} />
                <Route path={`${this.props.match.url}/clients/add`} component={ClientAddEdit} />
                <Route path={`${this.props.match.url}/clients/edit/:clientId`} component={ClientAddEdit} />

                <Route path={`${this.props.match.url}/settings`} component={SettingsComponent} />
                <Redirect from="*" to='/' />
              </Switch>
            </div>
          </Content>
         
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
