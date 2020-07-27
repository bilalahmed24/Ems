import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "./broadcast.css";
import BroadcastPanel from "./components/broadcast-panel";
import Bio from "./components/bio-panel";

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
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/13/2021",
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
        <Col span={19}>Fill Rest</Col>
      </Row>
    </>
  );
}

export default App;
