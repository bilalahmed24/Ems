import React from "react";
import { Badge, Typography } from "antd";
import "antd/dist/antd.css";
import "../employee-components/broadcast.css";
import BroadcastMsg from "../employee-components/broadcast-msg";

const { Title } = Typography;

const BroadcastPanel = (props) => {
  return (
    <>
      <div className="broadcast-panel-header">
        <Badge count={props.Msgs.length}>
          <Title level={3}>Broadcast</Title>
        </Badge>
      </div>

      <div className="broadcast-panel-body" style={{ height: "75vh" }}>
        {props.Msgs.map((msg) => (
          <BroadcastMsg
            key={msg.eventDate}
            type={msg.type}
            msg={msg.msg}
            eventDate={msg.eventDate}
          />
        ))}
      </div>
    </>
  );
};

export default BroadcastPanel;
