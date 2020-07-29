import React, { useState } from "react";
import { Row, Col, Radio, Typography } from "antd";
import { Pie } from "react-chartjs-2";

const { Title } = Typography;

const data = {
  datasets: [
    {
      backgroundColor: ["#98fb98", "#F4C2C2"],
      data: [10, 20],
    },
  ],

  labels: ["Timely Task Completions", "Late Task Completions"],
};

const radioStyle = {
  display: "block",
  height: "18px",
  paddingTop: "25px",
  lineHeight: "18px",
};

const EfficiencyChart = () => {
  const [value, setState] = useState(1);

  const onChange = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <Row>
        <Row gutter={[32, 16]} style={{ width: "100%" }}>
          <Col span={8}>
            <Title style={{ paddingTop: "10px" }} level={3}>
              Efficiency
            </Title>
            <Radio.Group onChange={onChange} value={value}>
              <Radio style={radioStyle} value={1}>
                Monthly
              </Radio>
              <Radio style={radioStyle} value={2}>
                Yearly
              </Radio>
            </Radio.Group>
          </Col>
          <Col span={16}>
            <Pie
              height={180}
              width={150}
              data={data}
              options={{
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
        </Row>
      </Row>
    </>
  );
};

export default EfficiencyChart;
