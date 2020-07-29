import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import BroadcastPanel from "./components/broadcast-panel";
import Bio from "./components/bio-panel";
import AttendancePanel1 from "./components/attendance-panel-1";
import AttendancePanel2 from "./components/attendance-panel-2";
import ProjectChart from "./components/project-chart-panel";
import MiniProjectDetails from "./components/mini-project-panel";
import EfficiencyChart from "./components/efficiency-panel";

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
          <Row style={{ backgroundColor: "red", height: 40 }}>
            <Col span={24}></Col>
          </Row>

          <Row style={{ paddingTop: "40px" }} justify="space-around">
            <Row style={{ height: "38vh" }}>
              <Col span={11}>
                <AttendancePanel1 />
              </Col>
              <Col span={11}>
                <AttendancePanel2 />
              </Col>
            </Row>
            <Row style={{ width: "100%", height: "28vh" }}>
              <Col span={11}>
                <ProjectChart />
              </Col>
              <Col span={11}>
                <EfficiencyChart />
              </Col>
            </Row>
            <Row style={{ height: "21vh", width: "100%" }}>
              <Col offset={2} span={21}>
                <MiniProjectDetails />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
