import React from "react";
import { Card } from "antd";
function DashboardHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <p className="text-white">Projects</p>
        </div>
        <div className="col-sm-4">
          <Card
            className="text-center card-default card-obelisk"
            bordered={false}
          >
            <h3>Pending</h3>
            <h1>2</h1>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card
            className="text-center card-default card-slifer"
            bordered={false}
          >
            <h3>Current</h3>
            <h1>1</h1>
          </Card>
        </div>
        <div className="col-sm-4">
          <Card
            className="text-center card-default card-apollo"
            bordered={false}
          >
            <h3>Finished</h3>
            <h1>5</h1>
          </Card>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-12">
          <p className="text-white">All</p>
        </div>
        <div className="col-sm-6 d-flex justify-content-center">
          <Card
            className="text-center card-default card-projects"
            bordered={false}
          >
            <h3>Projects</h3>
            <h1>4</h1>
          </Card>
        </div>
        <div className="col-sm-6 d-flex justify-content-center">
          <Card
            className="text-center card-default card-clients"
            bordered={false}
          >
            <h3>Clients</h3>
            <h1>2</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
