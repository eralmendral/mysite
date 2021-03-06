import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Table, Button, Space, Modal } from "antd";
import { connect } from "react-redux";
import {
  DesktopOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";

import { toast } from "react-toastify";

import { selectProjectList } from "../../../../redux/projects/project.selectors";
import { deleteProject }  from "../../../../redux/projects/project.actions";
import moment from 'moment';

const { confirm } = Modal;

function ProjectList({ projects, match, deleteProject, history }) {
  function showDeleteConfirm(record) {
    confirm({
      title: 'Are you sure delete this project?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteProject(record);
        toast.success("Project Deleted!", { closeButton: false ,  hideProgressBar: true });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }


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
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text) => <img src={text} className="img-fluid" alt='thumbnail' style={{ height: '120px', width: '150px', filter: 'grayscale(90%)'}} />,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
          <Button type='default' onClick={() => { history.push(`/dashboard/projects/edit/${record.id}`) } }>Edit</Button>
          <Button type='danger' onClick={() => showDeleteConfirm(record)}>Delete</Button>
        </Space>
        )
      },
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

const mapStateToProps = (state, ownProps) => ({
  projects: selectProjectList(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject: (project) => dispatch(deleteProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectList));
