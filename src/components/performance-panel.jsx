import React from "react";
import { Row, Col } from "antd";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [
    {
      backgroundColor: ["#98fb98", "#F4C2C2"],

      data: [10, 20],
    },
  ],

  labels: ["Total Projects", "Projects Leaded"],
};

const data1 = {
  datasets: [
    {
      backgroundColor: ["#98fb98", "#F4C2C2"],

      data: [20, 5],
    },
  ],

  labels: ["Timely", "Late"],
};

const PerformancePanel = () => {
  return (
    <>
      <Row style={{ width: "100%" }}>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col style={{ textAlign: "-webkit-center" }} flex="290px">
            <Pie
              height={260}
              width={320}
              data={data}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Project Evaluation",
                  fontSize: 18,
                },
                legend: {
                  position: "right",
                },
              }}
            />
          </Col>
          <Col style={{ textAlign: "-webkit-center" }} flex="290px">
            <Pie
              height={260}
              width={280}
              data={data1}
              options={{
                responsive: false,
                maintainAspectRatio: false,
                title: {
                  display: true,
                  text: "Efficiency Evaluation",
                  fontSize: 18,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default PerformancePanel;
