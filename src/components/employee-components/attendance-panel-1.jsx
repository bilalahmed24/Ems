import React, { useState } from "react";
import Clock from "react-live-clock";
import moment from "moment";
import "antd/dist/antd.css";
import { Typography, Row, Col, Button } from "antd";

const { Title } = Typography;

const AttendancePanel1 = () => {
  const [attendanceTime, setAttendanceTime] = useState("-- : --");
  const [exitTime, setexitTime] = useState("-- : --");
  const [disableBtn, setDisableBtn] = useState(false);

  function AttendanceTime() {
    setAttendanceTime(moment().format("HH:mm"));
    setexitTime(moment().add(8, "hours").format("HH:mm"));
    setDisableBtn(true);
  }
  return (
    <>
      <Row>
        <Col offset={3} span={8}>
          <label style={{ fontSize: 13 }}>Time</label>
          <Title level={2}>
            <Clock format="HH:mm" interval={60000} ticking={true} />
          </Title>
        </Col>
        <Col span={11}>
          <label style={{ color: "#878787", fontSize: 13 }}>Date</label>
          <Title style={{ color: "#878787" }} level={2}>
            <Clock format="D MMMM YYYY" interval={8.64e7} ticking={true} />
          </Title>
        </Col>
      </Row>
      <Row>
        <Col offset={3} span={8}>
          <label style={{ fontSize: 13 }}>Attendance Time</label>
          <Title level={2}>{attendanceTime}</Title>
        </Col>
        <Col span={11}>
          <label style={{ color: "#878787", fontSize: 13 }}>Exit Time</label>
          <Title style={{ color: "#878787" }} level={2}>
            {exitTime}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col offset={3} span={8}>
          <Button
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              color: "white",
            }}
            disabled={disableBtn}
            shape="round"
            size="large"
            onClick={() => AttendanceTime()}
          >
            Attendance
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AttendancePanel1;
