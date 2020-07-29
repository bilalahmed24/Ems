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
      <Row>
        <Row style={{ justifyContent: "space-evenly", width: "100%" }}>
          <Title level={4}>{date}</Title>
        </Row>
        <Row gutter={[32, 16]} style={{ width: "100%" }}>
          <Col span={12}>
            <Pie
              height={220}
              width={230}
              data={data}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                  align: "start",
                  position: "left",
                  labels: {
                    boxWidth: 15,
                  },
                },
              }}
            />
          </Col>
          <Col span={12}>
            <Pie
              height={220}
              width={245}
              data={data1}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                  align: "start",
                  position: "right",
                  labels: {
                    boxWidth: 15,
                  },
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
