import React, { useState } from "react";
import { Comment, Tooltip, Badge, Typography } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import { NotificationTwoTone, ScheduleTwoTone } from "@ant-design/icons";
import "./broadcast.css";
import BroadcastPanel from "./components/broadcast-panel";
import Bio from "./components/bio-panel";

const { Title } = Typography;

function App(props) {
  var type = props.type;
  var icon, showEvenDate;
  type = "broadcast";
  if (type === "broadcast") {
    icon = <NotificationTwoTone style={{ marginTop: 5, fontSize: 30 }} />;
  } else {
    icon = <ScheduleTwoTone style={{ marginTop: 15, fontSize: 30 }} />;
    showEvenDate = [
      <Tooltip title="Event Date">
        <Badge color="#108ee9" text={props.eventDate} />
      </Tooltip>,
    ];
  }
  var msgs = [
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "23/10/2020",
    },
    {
      type: "Event",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "24/10/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/100/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/10/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/19/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/12/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/15/2020",
    },
    {
      type: "Broadcast",
      msg: "dgadajdgajhgdjsadhgsjdgjhadjhdgasjdgjsagdhasgdjhsadgas",
      eventDate: "21/13/2020",
    },
  ];

  //<BroadcastPanel Msgs={msgs} />
  return (
    <>
      <div style={{ maxHeight: 100, width: 300 }}>
        <BroadcastPanel Msgs={msgs} />
      </div>
    </>
  );
}

export default App;
