import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const duration = 5;

const renderTime = ({ remainingTime }) => {
  var time, dimension;

  if (remainingTime === 0)
    return (
      <p style={{ paddingTop: 17, fontSize: "22px" }}>
        Work hours <br />
        completed
      </p>
    );

  remainingTime =
    remainingTime <= 3540
      ? ((dimension = "minutes"), (time = remainingTime / 60))
      : ((time = remainingTime / 3600), (dimension = "hours"));

  time = Math.ceil(time);

  return (
    <div>
      <div style={{ fontSize: "40px" }}>{time}</div>
      <p style={{ fontSize: "17px" }}>
        {dimension} remaining <br />
        in shift
      </p>
    </div>
  );
};

export default function Timer({ status }) {
  const timerProps = {
    size: 195,
    strokeWidth: 10,
    colors: [["#89cff0"]],
  };
  const styles = {
    display: "flex",
    fontFamily: "sans-serif",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "10px",
  };

  return (
    <div style={styles}>
      <CountdownCircleTimer
        {...timerProps}
        isPlaying={status}
        duration={duration}
        onComplete={() => {
          notification.open({
            message: "Shift Completed",
            description:
              "Normal work hours have been completed \n overtime started",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}
