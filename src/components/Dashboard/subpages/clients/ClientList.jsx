import React from "react";
import { Table, Button, Space } from "antd";
import { connect } from "react-redux";
import { selectClientList } from "../../../../redux/clients/client.selectors";
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from 'moment';

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
        <Button type="default" icon={<DeleteOutlined />} size={"small"}>
          Remove
        </Button>
      </Space>
    ),
  },
];

function ClientList({ clients }) {
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

export default connect(mapStateToProps)(ClientList);
