import React from "react";
import { Badge, Typography } from "antd";
import "antd/dist/antd.css";
import "./broadcast.css";
import BroadcastMsg from "./broadcast-msg";

const { Title } = Typography;

const BroadcastPanel = (props) => {
  return (
    <>
      <div className="broadcast-panel-header">
        <Title level={4} strong>
          Broadcast
          <Badge className="floated" count={props.Msgs.length} />
        </Title>
      </div>

      <div className="broadcast-panel-body scrollbar scrollbar-info">
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
