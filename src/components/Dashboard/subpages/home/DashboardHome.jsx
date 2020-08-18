import React from "react";
import { Card } from "antd";
function DashboardHome() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Card className="text-center" title="Pending Project" bordered={true} style={{ width: '100%'}}>
             <h1>32</h1>
            </Card>
          </div>
          <div className="col-sm-4">
          <Card className="text-center" title="Current Project" bordered={true} style={{ width: '100%'}}>
             <h1>32</h1>
            </Card>
          </div>
          <div className="col-sm-4">
          <Card className="text-center" title="Done Project" bordered={true} style={{ width: '100%'}}>
             <h1>32</h1>
            </Card>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6 d-flex justify-content-center">
            <Card title="All Projects" bordered={true} style={{ width: '75%' }}>
              <p>Card content</p>
            </Card>
          </div>
          <div className="col-sm-6">
          <Card title="All Clients" bordered={true} style={{ width: '75%' }}>
              <p>Card content</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
