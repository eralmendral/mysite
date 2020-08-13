import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "./dashboard.scss";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./components/Sidebar.component";

import ProjectList from "./subpages/projects/ProjectList";
import ClientList from './subpages/clients/ClientList'
import ClientAddEdit from './subpages/clients/ClientAddEdit';

import DashboardHome from "./subpages/home/DashboardHome";
import { ToastContainer } from 'react-toastify';
const { Header, Content } = Layout;
class Dashboard extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <ToastContainer />
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

                <Route exact path={`${this.props.match.url}/clients`} component={ClientList} />
                <Route path={`${this.props.match.url}/clients/add`} component={ClientAddEdit} />
                <Route path={`${this.props.match.url}/clients/edit/:clientId`} component={ClientAddEdit} />

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

export default Dashboard;
