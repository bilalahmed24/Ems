import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col } from "antd";
import moment from "moment";
import Clock from "./clock/mainClock";
import Timer from "./time-remaining";
import Marker from "./attendance-marker";

const { Title } = Typography;

var date = moment();
date = date.format("dddd, MMMM Do YYYY");

const AttendancePanel1 = () => {
  const [btnText, setText] = useState("Attendance");
  const [btnStatus, setStatus] = useState(false);
  const [timerStatus, setTimer] = useState(false);

  return (
    <>
      <Row style={{ height: "10%" }}>
        <Title style={{ width: "100%", textAlign: "center" }} level={4}>
          {date}
        </Title>
      </Row>
      <Row style={{ height: "90%" }}>
        <Col flex="195px">
          <Clock />
        </Col>
        <Col flex="222.81px">
          <Timer status={timerStatus} />
        </Col>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col>
            <Marker
              btnText={btnText}
              setText={setText}
              setStatus={setStatus}
              btnStatus={btnStatus}
              setTimer={setTimer}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AttendancePanel1;
