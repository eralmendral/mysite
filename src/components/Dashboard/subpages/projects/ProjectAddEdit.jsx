import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Upload, message } from "antd";
import {
  UserOutlined,
  DesktopOutlined,
  CodeSandboxOutlined,
  GithubOutlined,
  ChromeOutlined,
  InboxOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { storage } from "../../../../config/fbConfig";
import { v4 as uuidv4 } from "uuid";

function ProjectAddEdit(props) {
  const id = uuidv4(); // projectid
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  const [date, setDate] = useState(new Date());

  const onOkDate = (value) => {
    setDate(value ? value.toDate() : null);
  };

  // Project Images
  const imagesUploadProps = {
    name: "file",
    multiple: false,
    onChange(info) {
      console.log("debug upload:", info);
      const { status } = info.file;

      //   if (status !== "uploading") {
      //     console.log(info.file, info.fileList);
      //   }
      //   if (status === "done") {
      //     message.success(`${info.file.name} file uploaded successfully.`);
      //   } else if (status === "error") {
      //     message.error(`${info.file.name} file upload failed.`);
      //   }
    },
  };

  // Thumbnail
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const handleUpload = (e) => {
    const image = e.target.files[0];
    if (e.target.files[0]) {
      const uploadTask = storage
        .ref(`${id}/thumbnail/${id}${image.name}`)
        .put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(id)
            .child(`/thumbnail/${id}${image.name}`)
            .getDownloadURL()
            .then((url) => {
              setThumbnailUrl(url);
            });
        }
      );
    }
  };

  // Form submitted
  const onSubmit = (values) => {
    toast.success("Project Added!", {
      closeButton: true,
      hideProgressBar: true,
    });

    form.resetFields();
  };

  return (
    <div>
      <h3> Add Project</h3>
      <div className="row mt-3">
        <div className="col-sm-6">
          <Form form={form} initialValues={{}} onFinish={onSubmit}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input title of project!" },
              ]}
            >
              <Input
                placeholder="Project Title"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="client"
              rules={[
                { required: true, message: "Please input title of project!" },
              ]}
            >
              <Input
                placeholder="Project Client"
                prefix={<DesktopOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <span>Description</span>
            <Form.Item name="description">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="github">
              <Input
                prefix={<GithubOutlined className="site-form-item-icon" />}
                placeholder="Git Repository"
              />
            </Form.Item>

            <Form.Item name="demo">
              <Input
                prefix={<CodeSandboxOutlined className="site-form-item-icon" />}
                placeholder="Demo Link"
              />
            </Form.Item>

            <Form.Item name="prod">
              <Input
                prefix={<ChromeOutlined className="site-form-item-icon" />}
                placeholder="Production Link"
              />
            </Form.Item>

            <Form.Item>
              <Button type="dashed" danger icon={<UploadOutlined />}>
                <label htmlFor="thumbnail">Upload Thumbnail</label>
              </Button>

              <input
                type="file"
                id="thumbnail"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </Form.Item>

            <span>Images</span>
            <Form className="Item">
              <Dragger {...imagesUploadProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </Form>

            <br />
            <Form.Item>
              <DatePicker
                size="medium"
                onChange={onOkDate}
                placeholder={date ? date : "Select a date"}
                format="MMM DD YYYY"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="col-sm-6">
          {thumbnailUrl ? (
            <div className="thumbnail">
              <img src={thumbnailUrl} alt="thumbnail" className="img-fluid" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectAddEdit));
