import React from "react";
import { Row, Col, Typography, Button, Table } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;

const columns = [
  {
    title: "Job ID",
    dataIndex: "ID",
  },
  {
    title: "Title",
    dataIndex: "Title",
  },
  {
    title: "Job Hours",
    dataIndex: "Hours",
  },
  {
    title: "Basic Salary",
    dataIndex: "BasicSalary",
  },
  {
    title: "No. of Bonuses",
    dataIndex: "NoBonus",
  },
  {
    title: "Total Employees",
    dataIndex: "TotalEmployee",
  },
  {
    title: "View/Edit",
    dataIndex: "View/Edit",
    render: () => (
      <Button type="primary" shape="round">
        View/Edit
      </Button>
    ),
  },
];

const data = [
  {
    ID: "UX0001",
    Title: "UX",
    Hours: "09:00-06:00",
    BasicSalary: "500000",
    NoBonus: "12",
    TotalEmployee: "50",
  },
  {
    ID: "UX0001",
    Title: "UX",
    Hours: "09:00-06:00",
    BasicSalary: "500000",
    NoBonus: "12",
    TotalEmployee: "50",
  },
  {
    ID: "UX0001",
    Title: "UX",
    Hours: "09:00-06:00",
    BasicSalary: "500000",
    NoBonus: "12",
    TotalEmployee: "50",
  },
];

const AdminJobs = () => {
  return (
    <Row style={{ padding: "30px 20px" }}>
      <Col span={24} className="col-display">
        <Title style={{ float: "left", color: "#878787" }} level={3}>
          Jobs List
        </Title>
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
          scroll={{ y: 450 }}
        />
      </Col>
    </Row>
  );
};

export default AdminJobs;
