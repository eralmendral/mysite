import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, DatePicker } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { addClient } from "../../../../redux/clients/client.actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function ClientAddEdit(props) {
  const [date, setDate] = useState(new Date());
  let urlParts = props.match.path.split("/");
  let mode = urlParts.pop() === "add" ? "Add" : "Edit";
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // dispatch action here to save data to firestore
    const data = {
      ...values,
      date: date,
    };

    // dispatch action here
    props.addClient(data);
    form.resetFields();
    toast.success("Client Added!", { closeButton: false ,  hideProgressBar: true });
  };

  const onOkDate = (value) => {
    setDate(value.toDate());
  };

  return (
    <div>
      <h3> {mode} Client</h3>
      <div className="row mt-3">
        <div className="col-sm-6">
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please name of client!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Client Name"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input email of client!" },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="Client Email"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input phone of client!" },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                type="tel"
                placeholder="Client Phone"
              />
            </Form.Item>

            <Form.Item>
              <DatePicker showTime onOk={onOkDate} placeholder="Start Date" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (payload) => dispatch(addClient(payload)),
});

export default connect(null, mapDispatchToProps)(withRouter(ClientAddEdit));
