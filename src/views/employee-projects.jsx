import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "../components/employee-components/projects-css.css";
import ProjectTable from "../components/employee-components/project-detailed-table";
import TaskTable from "../components/employee-components/tasks-detailed-table";

const EmployeeProjectTab = () => {
  return (
    <>
      <Row style={{ paddingTop: 30, paddingRight: 10 }}>
        <Col span={19} style={{ padding: "0 20px" }}>
          <Row>
            <Col span={24} className="basic-title-color col-display">
              <ProjectTable />
            </Col>
          </Row>
          <Row style={{ paddingTop: "15px" }}>
            <Col span={24} className="basic-title-color">
              <TaskTable />
            </Col>
          </Row>
        </Col>

        <Col span={5} className="col-display">
          <h1>asdsa</h1>
          {/* <ProjectChat /> */}
        </Col>
      </Row>
    </>
  );
};

export default EmployeeProjectTab;
