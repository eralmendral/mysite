import React from "react";
import { withRouter, Link } from 'react-router-dom';

import { Table, Button, Space , Modal } from "antd";
import { connect } from "react-redux";
import { selectClientList } from "../../../../redux/clients/client.selectors";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";

import { deleteClient } from '../../../../redux/clients/client.actions'

import moment from 'moment';
import { toast } from "react-toastify";

const { confirm } = Modal;

function ClientList({ match, history, clients, deleteClient }) {

  let data = [];
  for(let key in clients) {
      let obj = clients[key]
      let date = obj.hasOwnProperty('date') ? obj.date ?  moment(obj.date.toDate()).format('MMM. DD YYYY') : null : null;
      let client = {
        ...obj,
        key: obj.id,
        date: date
      }
      data.push(client)
  }

  function showDeleteConfirm(record) {
    confirm({
      title: 'Are you sure delete this client?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteClient(record.id);
        toast.success("Client Deleted!", { closeButton: false ,  hideProgressBar: true });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Start Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={ () => {  history.push(match.path + '/edit/' + record.id) }}/>
          <DeleteOutlined  onClick={() => { showDeleteConfirm(record)}}/>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="row mb-3">
        <div className="col-sm-12 d-flex flex-row justify-content-between">
          <h3>Clients</h3>
          <Link to="clients/add">
            <Button
              className="align-self-end"
              type="default"
              icon={<UserAddOutlined />}
              size={"medium"}
            >
              Add Client
            </Button>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  clients: selectClientList(state),
});

const mapDispatchToProps = dispatch => ({
  deleteClient: (id) => (dispatch(deleteClient(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClientList));
