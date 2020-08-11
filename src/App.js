import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import HomeComponent from './components/Home/Home.component';
import LoginComponent from './components/Login/Login.component';
import ProjectComponent from './components/Home/Project/Project.component';
import DashboardComponent from './components/Dashboard/Dashboard.component'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeComponent} />
      {/* <Route exact path="/dashboard" component={DashboardComponent} />
      <Route exact path="/project/:id" component={ProjectComponent} />
      <Route exact path="/login" component={LoginComponent} /> */}
    </Router>
  );
}

export default App;
