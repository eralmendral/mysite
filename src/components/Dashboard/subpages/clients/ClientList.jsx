import React from "react";
import { Table, Button, Space , Modal } from "antd";
import { connect } from "react-redux";
import { selectClientList } from "../../../../redux/clients/client.selectors";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from 'moment';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { deleteClient } from '../../../../redux/clients/client.actions'
import { toast } from "react-toastify";

const { confirm } = Modal;

function ClientList({ clients, deleteClient }) {

  let data = [];
  for(let key in clients) {
      let obj = clients[key]
      let date = obj.hasOwnProperty('date') ?  moment(obj.date.toDate()).format('MMM. DD YYYY') : null;
      let client = {
        ...obj,
        key: obj.id,
        date: date
      }
      data.push(client)
  }

  function showDeleteConfirm(record) {
    console.log('value:',record); 
    confirm({
      title: 'Are you sure delete this client?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteClient(record.id);
        toast.success("Client Added!", { closeButton: false ,  hideProgressBar: true });
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
          <Button type="primary" icon={<EditOutlined />} size={"small"}>
            Edit
          </Button>
          <Button type="default" icon={<DeleteOutlined />} size={"small"} onClick={() => { showDeleteConfirm(record)}}>
            Remove
          </Button>
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
              type="primary"
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
