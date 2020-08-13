import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, DatePicker } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { addClient, updateClient } from "../../../../redux/clients/client.actions";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { selectClient } from "../../../../redux/clients/client.selectors";

function ClientAddEdit(props) {
  let urlParts = props.match.path.split("/");
  let mode = urlParts.pop() === "add" ? "Add" : "Edit";

  const [date, setDate] = useState(mode === 'Edit' ? props.client ? props.client.date.toDate() : new Date() : null);
  if(mode === 'Edit' && !props.client) {
    props.history.push('/dashboard/clients')
  } 
  
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const data = {
      ...values,
      date: date,
    };

    // dispatch action here
    if(mode === 'Add') {
      props.addClient(data);
      toast.success("Client Added!", { closeButton: false ,  hideProgressBar: true });
      form.resetFields();
      props.history.push('/dashboard/clients')
    }

    if(mode === 'Edit') {
      data.id = props.client.id;
      console.log(data);
      props.updateClient(data);
      toast.success("Client Updated!", { closeButton: false ,  hideProgressBar: true });
    }
   
  };

  const onOkDate = (value) => {
    setDate(value ? value.toDate() : null);
  };

  return (
    <div>
      <h3> {mode} Client</h3>
      <div className="row mt-3">
        <div className="col-sm-6">
          <Form
            form={form}
            className="login-form"
            initialValues={props.client ? { 
              name: mode === 'Edit' ? props.client.name : '',
              email: mode === 'Edit' ? props.client.email : '',
              phone: mode === 'Edit' ? props.client.phone : ''
            } : null}
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
              <DatePicker size='medium' onChange={onOkDate} placeholder={date ? date : 'Select a date'} format='MMM DD YYYY' />
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

const mapStateToProps = (state, ownProps) => ({
  client: selectClient(ownProps.match.params.clientId)(state)
})


const mapDispatchToProps = (dispatch) => ({
  addClient: (payload) => dispatch(addClient(payload)),
  updateClient: (payload) => dispatch(updateClient(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClientAddEdit));
