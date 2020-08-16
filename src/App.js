import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomeComponent from './components/Home/Home.component';
import LoginComponent from './components/Login/Login.component';
import ProjectComponent from './components/Home/Project/Project.component';
import DashboardComponent from './components/Dashboard/Dashboard.component'
import PrivateRoute from './hoc/PrivateRoute';
import { AuthProvider } from './context/Auth.js';

import { connect } from 'react-redux';
import { fetchProjectsStart } from './redux/projects/project.actions';
import { fetchClientsStart } from './redux/clients/client.actions';


function App(props) {
  useEffect(() => {
    props.fetchProjects();
    props.fetchClients()
  }, [props])
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={HomeComponent} />
        <PrivateRoute path="/dashboard" component={DashboardComponent} />
        <Route exact path="/projects/:id" component={ProjectComponent} />
        <Route path="/login" component={LoginComponent} />
        <Redirect from="*" to='/' />
      </Router>
    </AuthProvider>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => (dispatch(fetchProjectsStart())),
  fetchClients: () => (dispatch(fetchClientsStart())),
})

export default connect(null, mapDispatchToProps)(App);
