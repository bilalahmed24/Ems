import React from "react";
import "antd/dist/antd.css";
import { Descriptions, Typography } from "antd";

const { Title, Paragraph } = Typography;

const MiniProjectDetails = () => {
  return (
    <>
      <div className="miniprojecct-panel-body scrollbar scrollbar-info">
        <Descriptions
          title={<Title level={3}>Active Projects</Title>}
          size="middle"
          colon={false}
        >
          <Descriptions.Item label={<Title level={3}>ABC</Title>}>
            <Paragraph strong style={{ paddingLeft: 5 }}>
              Status <br /> Deadline
            </Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label={<Title level={3}>DEF</Title>}>
            <Paragraph strong style={{ paddingLeft: 5 }}>
              Status <br /> Deadline
            </Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label={<Title level={3}>GHI</Title>}>
            <Paragraph strong style={{ paddingLeft: 5 }}>
              Status <br /> Deadline
            </Paragraph>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
};

export default MiniProjectDetails;
