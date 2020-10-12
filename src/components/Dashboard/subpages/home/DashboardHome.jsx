import React from "react";
import { selectAllProjectCount, selectPendingProjectCount, selectCurrentProjectCount, selectFinishedProjectCount } from "../../../../redux/projects/project.selectors";
import { selectAllClientCount } from "../../../../redux/clients/client.selectors";

import { Card } from "antd";
import { connect } from "react-redux";
function DashboardHome({ projectsCount, clientsCount, pendingProjectsCount, currentProjectsCount, finshedProjectsCount }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <b>Projects</b>
        </div>
        <div className="col-sm-4">
          <Card
            className="text-center card-default card-obelisk"
            bordered={false}
          >
            <h3>Pending</h3>
            <h1>{ pendingProjectsCount ? pendingProjectsCount : 0 }</h1>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card
            className="text-center card-default card-slifer"
            bordered={false}
          >
            <h3>Current</h3>
            <h1>{ currentProjectsCount ? currentProjectsCount : 0 }</h1>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card
            className="text-center card-default card-apollo"
            bordered={false}
          >
            <h3>Finished</h3>
            <h1>{ finshedProjectsCount ? finshedProjectsCount : 0 }</h1>
          </Card>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-12">
          <b>All</b>
        </div>
        <div className="col-sm-6 d-flex justify-content-center">
          <Card
            className="text-center card-default card-projects"
            bordered={false}
          >
            <h3>Projects</h3>
            <h1>{projectsCount ? projectsCount : 0}</h1>
          </Card>
        </div>
        <div className="col-sm-6 d-flex justify-content-center">
          <Card
            className="text-center card-default card-clients"
            bordered={false}
          >
            <h3>Clients</h3>
            <h1>{clientsCount ? clientsCount : 0}</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  projectsCount: selectAllProjectCount(state),
  clientsCount: selectAllClientCount(state),
  pendingProjectsCount: selectPendingProjectCount(state),
  currentProjectsCount: selectCurrentProjectCount(state),
  finshedProjectsCount: selectFinishedProjectCount(state),
});
export default connect(mapStateToProps, null)(DashboardHome);
