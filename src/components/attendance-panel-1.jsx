import React from "react";
import Clock from "react-live-clock";
import "antd/dist/antd.css";
import { Typography, Row, Col, Button } from "antd";

const { Title } = Typography;

const AttendancePanel1 = () => {
  return (
    <>
      <Row>
        <Row style={{ width: "100%" }}>
          <Col offset={5} span={8}>
            <label style={{ fontSize: 13 }}>Time</label>
            <Title level={2}>
              <Clock format="HH:mm" interval={60000} ticking={true} />
            </Title>
          </Col>
          <Col span={9}>
            <label style={{ fontSize: 13 }}>Date</label>
            <Title level={2}>
              <Clock format="D MMMM YYYY" interval={8.64e7} ticking={true} />
            </Title>
          </Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col offset={5} span={8}>
            <label style={{ fontSize: 13 }}>Attendance Time</label>
            <Title level={2}>
              <Clock format="HH:mm" interval={60000} ticking={true} />
            </Title>
          </Col>
          <Col span={9}>
            <label style={{ fontSize: 13 }}>Exit Time</label>
            <Title level={2}>
              <Clock format="HH:mm" interval={60000} ticking={true} />
            </Title>
          </Col>
        </Row>
        <Row align="bottom" style={{ width: "100%" }}>
          <Col offset={5} span={8}>
            <Button type="primary" shape="round" size="large">
              Attendance
            </Button>
          </Col>
          <Col span={9}>
            <Button type="primary" shape="round" size="large">
              Exit
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AttendancePanel1;

// var datetime = null,
//   date = null;

// var update = function () {
//   date = moment(new Date());
//   datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
// };

// $(document).ready(function () {
//   datetime = $("#datetime");
//   update();
//   setInterval(update, 1000);
// });
