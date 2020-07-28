import React from "react";
import { Typography, Row, Col } from "antd";
import moment from "moment";
import { Pie } from "react-chartjs-2";

const { Title } = Typography;

var date = moment();
date = date.format("MMMM, YYYY");

const data = {
  datasets: [
    {
      backgroundColor: ["#98fb98", "#F4C2C2"],

      data: [10, 20],
    },
  ],

  labels: ["Presents", "Absents"],
};

const data1 = {
  datasets: [
    {
      backgroundColor: ["#F4C2C2", "#C8A2C8", "#98fb98"],

      data: [10, 20, 30],
    },
  ],

  labels: ["Over Times", "Full Times", "Less Times"],
};

const AttendancePanel2 = () => {
  return (
    <>
      <Row style={{ width: "100%" }}>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col>
            <Title level={4}>{date}</Title>
          </Col>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col flex="290px">
            <Pie
              height={250}
              width={280}
              data={data}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Current Month Attendance",
                  fontSize: 18,
                },
                legend: {
                  position: "bottom",
                },
              }}
            />
          </Col>
          <Col flex="290px">
            <Pie
              height={267}
              width={280}
              data={data1}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Current Month Work Schedule",
                  fontSize: 18,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
              }}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AttendancePanel2;
