import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Table, Button, Space, Modal } from "antd";
import { connect } from "react-redux";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  DesktopOutlined,
} from "@ant-design/icons";

import { selectProjectList } from "../../../../redux/projects/project.selectors";
import moment from 'moment';

function ProjectList({ projects, match }) {
 let projectList = [];
 for(let key in projects){
     let obj = projects[key];
     let date = obj.hasOwnProperty('date') ? moment(obj.date.toDate()).format('MMM. DD YYYY') : null;
     let project = {
         ...obj,
         key: obj.id,
         date: date
     }
     projectList.push(project);
 }
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text) => <img src={text} className="img-fluid" alt='thumbnail' style={{ maxHeight: '100px', filter: 'grayscale(90%)'}} />,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EyeOutlined />
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="row mb-3">
        <div className="col-sm-12 d-flex flex-row justify-content-between">
          <h3>Projects</h3>
          <Link to={`${match.path}/add`}>
            <Button
              className="align-self-end"
              type="default"
              icon={<DesktopOutlined />}
              size={"medium"}
            >
              Add Project
            </Button>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <Table columns={columns} dataSource={projectList} pagination={false} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  projects: selectProjectList(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectList));
