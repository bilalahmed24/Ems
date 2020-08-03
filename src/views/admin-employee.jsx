import React from "react";
import { Row, Col, Typography, Button, Input, Table } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;
const { Search } = Input;

const AdminEmployee = () => {
  const columns = [
    {
      title: "Employee ID",
      dataIndex: "ID",
    },
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Join Date",
      dataIndex: "JoinDate",
    },
    {
      title: "Job Title",
      dataIndex: "Job",
    },
    {
      title: "Absent",
      dataIndex: "Absent",
    },
    {
      title: "Present",
      dataIndex: "Present",
    },
    {
      title: "Leaves",
      dataIndex: "Leaves",
    },
    {
      title: "Early Exit",
      dataIndex: "EarlyExit",
    },
    {
      title: "Salary",
      dataIndex: "Salary",
    },
    {
      title: "Profile",
      dataIndex: "Profile",
      render: () => (
        <Button type="primary" shape="round">
          View
        </Button>
      ),
    },
    {
      title: "Mark Leave",
      dataIndex: "MarkLeave",
      render: () => (
        <Button type="primary" shape="round">
          Mark
        </Button>
      ),
    },
  ];

  const data = [
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
  ];

  return (
    <>
      <Row style={{ padding: "30px 20px" }}>
        <Row>
          <Col span={24} className="col-display">
            <Title style={{ float: "left", color: "#878787" }} level={3}>
              Employee List
            </Title>
            <Search
              placeholder="Search Employee"
              onSearch={(value) => console.log(value)}
              style={{ width: 200, float: "right" }}
              className="form-items"
            />
            <br />
            <Table
              width="100%"
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={false}
              scroll={{ y: 310 }}
            />
          </Col>
        </Row>
        <Row style={{ width: "100%", textAlign: "center", paddingTop: 10 }}>
          <Col span={12} className="col-display">
            <Title style={{ float: "left", color: "#878787" }} level={3}>
              Total Employees
            </Title>
            <Title level={1}>1069</Title>
          </Col>
          <Col offset={1} span={11} className="col-display">
            <Title style={{ float: "left", color: "#878787" }} level={3}>
              Total Basic Salary
            </Title>
            <Title level={1}>Rs {"10800000000"}</Title>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AdminEmployee;
