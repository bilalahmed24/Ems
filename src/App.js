import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import NavBar from "./components/employee-components/navbar";
import BroadcastPanel from "./components/employee-components/broadcast-panel";
import Bio from "./components/employee-components/bio-panel";
import EmployeeDashboard from "./views/employee-dashboard";
import EmployeeSalaryAttendanceTab from "./views/employee-salary-attendance";
import EmployeeProjectTab from "./views/employee-projects";
import EmployeeContactTab from "./views/employee-contact-admin";

function App() {
  var msgs = [
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "23/10/2020",
    },

    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "23/12/2020",
    },

    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/13/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "2/13/2020",
    },
  ];

  return (
    <>
      <Row style={{ backgroundColor: "#f2f2f0", height: "100vh" }}>
        <Col span={5}>
          <Row>
            <Bio />
          </Row>
          <Row>
            <BroadcastPanel Msgs={msgs} />
          </Row>
        </Col>
        <Col style={{ backgroundColor: "#FFFFFF" }} span={19}>
          <Row style={{ height: 40 }}>
            <Col span={24}>
              <NavBar />
            </Col>
          </Row>
          <EmployeeDashboard />
        </Col>
      </Row>
    </>
  );
}

export default App;
