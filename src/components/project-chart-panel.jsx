import React from "react";
import { Row, Col } from "antd";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Total Projects", "Projects Leaded"],
  datasets: [
    {
      label: "Total Projects",
      backgroundColor: "rgb(152, 251, 152,0.8)",
      borderColor: "rgb(152, 251, 152,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(152, 251, 152,0.6)",
      hoverBorderColor: "rgb(152, 251, 152,1)",
      data: [30, 0],
    },
    {
      label: "Projects Leaded",
      backgroundColor: "rgb(244, 194, 194,0.8)",
      borderColor: "rgb(244, 194, 194,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(244, 194, 194,0.6)",
      hoverBorderColor: "rgb(244, 194, 194,1)",
      data: [0, 5],
    },
  ],
};

const ProjectChart = () => {
  return (
    <>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col>
          <HorizontalBar data={data}  />
        </Col>
      </Row>
    </>
  );
};

export default ProjectChart;
/* 
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
*/
