import React, { useState } from "react";
import { Row, Col, Radio, Typography } from "antd";
import { Pie } from "react-chartjs-2";

const { Title } = Typography;

const data = {
  datasets: [
    {
      backgroundColor: ["red", "#00ff00"],
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
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col span={6}>
          <Title style={{ color: "#878787", paddingTop: "10px" }} level={3}>
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
        <Col span={15}>
          <Pie
            height={140}
            width={120}
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
    </>
  );
};

export default EfficiencyChart;
