import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import BroadcastPanel from "./components/broadcast-panel";
import Bio from "./components/bio-panel";
import AttendancePanel1 from "./components/attendance-panel-1";
import AttendancePanel2 from "./components/attendance-panel-2";
import PerformancePanel from "./components/performance-panel";
import MiniProjectDetails from "./components/mini-project-panel";

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
      <Row style={{ height: "100vh" }}>
        <Col span={5}>
          <Row>
            <Bio />
          </Row>
          <Row>
            <BroadcastPanel Msgs={msgs} />
          </Row>
        </Col>
        <Col span={19}>
          <Row style={{ backgroundColor: "red", height: 40 }}></Row>

          <Row>
            <Col flex="445.63px">
              <AttendancePanel1 />
            </Col>
            <Col flex="620px">
              <AttendancePanel2 />
            </Col>
          </Row>
          <Row>
            <PerformancePanel />
          </Row>
          <Row>
            <MiniProjectDetails />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
