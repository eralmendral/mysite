import React, { useEffect} from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import HomeComponent from './components/Home/Home.component';
import LoginComponent from './components/Login/Login.component';
import ProjectComponent from './components/Home/Project/Project.component';
import DashboardComponent from './components/Dashboard/Dashboard.component'
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { fetchProjectsStart } from './redux/projects/project.actions';
import { fetchClientsStart } from './redux/clients/client.actions';

function App(props) {
  useEffect(() => {
    props.fetchProjects();
    props.fetchClients()
  }, [props])
  return (
    <Router>
      <Route exact path="/" component={HomeComponent} />
      <Route  path="/dashboard" component={DashboardComponent} />
       <Route exact path="/projects/:id" component={ProjectComponent} />
      <Route path="/login" component={LoginComponent} /> 
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => (dispatch(fetchProjectsStart())),
  fetchClients: () => (dispatch(fetchClientsStart())),
})

export default connect(null, mapDispatchToProps)(App);
