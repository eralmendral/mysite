import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import {
  UserOutlined,
  DesktopOutlined,
  CodeSandboxOutlined,
  GithubOutlined,
  ChromeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { storage } from "../../../../config/fbConfig";
import { v4 as uuidv4 } from "uuid";

import { addProject } from "../../../../redux/projects/project.actions";

function ProjectAddEdit({ addProject }) {
  const id = uuidv4(); // projectid
  const [form] = Form.useForm();
  const { Option } = Select;

  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState("current");
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const [imagesUrls, setImagesUrls] = useState([]);
  const onOkDate = (value) => {
    setDate(value ? value.toDate() : null);
  };

  const getThumbnailUrl = (url) => {
    setThumbnailUrl(url);
  };

  const getImagesUrls = (url) => {
    let images = imagesUrls;
    images.push(url);
    setImagesUrls([...images]);
  };

  const uploadImage = (event, index, path) => {
    const image = event.target.files[index];
    if (image) {
      const uploadTask = storage
        .ref(`${id}/${path}/${index}${id}/${image.name}`)
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
            .child(`/${path}/${index}${id}/${image.name}`)
            .getDownloadURL()
            .then((url) => {
              if (path === "thumbnail") {
                getThumbnailUrl(url);
              }

              if (path === "images") {
                getImagesUrls(url);
              }
            });
        }
      );
    }
  };

  const handleUploadThumbnail = (event) => {
    uploadImage(event, 0, "thumbnail");
  };

  const handleUploadImages = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      uploadImage(event, i, "images");
    }
  };

  function handleStatusChange(value) {
    setStatus(value);
  }

  // Form Submited
  const onSubmit = (values) => {
    const data = {
      status,
      date,
    };

    for (const [key, value] of Object.entries(values)) {
      if (value) {
        data[key] = value;
      }
    }

    if (thumbnailUrl) {
      data["thumbnail"] = thumbnailUrl;
    }

    addProject(data);

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
          <Form form={form} onFinish={onSubmit}>
            <Form.Item
              name="title"
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
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input description of project!",
                },
              ]}
            >
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

            <b>Thumbnail</b>
            <Form.Item>
              <Button type="dashed" danger icon={<UploadOutlined />}>
                <label htmlFor="thumbnail">Upload Thumbnail</label>
              </Button>

              <input
                type="file"
                id="thumbnail"
                onChange={handleUploadThumbnail}
                style={{ display: "none" }}
              />
            </Form.Item>

            <b>
              Images <small className="text-danger">*select multiple</small>
            </b>
            <Form className="Item">
              <Button type="dashed" danger icon={<UploadOutlined />}>
                <label htmlFor="images">Upload Images</label>
              </Button>

              <input
                type="file"
                multiple
                id="images"
                onChange={handleUploadImages}
                style={{ display: "none" }}
              />
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
              <Select
                defaultValue="current"
                style={{ width: 150 }}
                onChange={handleStatusChange}
              >
                <Option value="pending">Pending</Option>
                <Option value="current">Current</Option>
                <Option value="finished">Finished</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              {thumbnailUrl ? (
                <div className="thumbnail">
                  <img
                    src={thumbnailUrl}
                    alt="thumbnail"
                    className="img-fluid"
                  />
                </div>
              ) : null}
            </div>

            <div className="col-sm-12 mt-3">
              <div className="project-images-wrapper d-flex">
                {imagesUrls.length > 0
                  ? imagesUrls.map((imageUrl, i) => (
                      <div key={i} className="project-image mx-1">
                        <img
                          src={imageUrl}
                          alt="project images"
                          className="img-fluid"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectAddEdit));
