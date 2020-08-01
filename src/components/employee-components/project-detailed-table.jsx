import React from "react";
import {
  Row,
  Col,
  Typography,
  Radio,
  Menu,
  Dropdown,
  Space,
  Button,
  Table,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import moment from "moment";

const { Title } = Typography;

const ProjectTable = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
    },
    {
      title: "Date Created",
      dataIndex: "DateCreated",
    },
    {
      title: "Deadline",
      dataIndex: "Deadline",
    },
    {
      title: "Status",
      dataIndex: "Status",
    },
    {
      title: "Progress",
      dataIndex: "Progress",
    },
    {
      title: "Leading Member",
      dataIndex: "LeadingMember",
    },
    {
      title: "Assign Task",
      dataIndex: "Task",
      render: () => (
        <Button type="primary" shape="round">
          Assign
        </Button>
      ),
    },
  ];
  const data = [
    {
      Title: "ABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },
    {
      Title: "ADBC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },
    {
      Title: "FABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },
    {
      Title: "EABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },
    {
      Title: "GABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },
    {
      Title: "IABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },

    {
      Title: "TABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },

    {
      Title: "LABC",
      DateCreated: "24/01/1020",
      Deadline: "24/01/1021",
      Status: "Active",
      Progress: "80%",
      LeadingMember: "Mee",
    },
  ];

  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 20))
    .fill("")
    .map((v, idx) => now - idx);
  const months = moment.months();
  const currentMonth = moment(new Date()).month();

  const yearMenu = (
    <Menu>
      {years.map((year) => (
        <Menu.Item key={year}>{year}</Menu.Item>
      ))}
    </Menu>
  );

  const monthMenu = (
    <Menu>
      {months.map((month) => (
        <Menu.Item key={month}>{month}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <Col span={24}>
          <Title style={{ float: "left", color: "#878787" }} level={3}>
            Project List
          </Title>
          <Radio.Group value={1} style={{ paddingTop: 5 }}>
            <Radio value={1}>Active</Radio>
            <Radio value={2}>Completed</Radio>
            <Radio value={3}>All Projects</Radio>
          </Radio.Group>
          <div style={{ float: "right", display: "inline-block" }}>
            <Space>
              <Dropdown overlay={monthMenu} trigger={["click"]}>
                <a className="dropdown-archon">
                  {months[currentMonth]}
                  <DownOutlined className="dropdown-icon" />
                </a>
              </Dropdown>
              <Dropdown overlay={yearMenu} trigger={["click"]}>
                <a className="dropdown-archon">
                  {years[0]} <DownOutlined className="dropdown-icon" />
                </a>
              </Dropdown>
            </Space>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={false}
            scroll={{ y: 250 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProjectTable;
