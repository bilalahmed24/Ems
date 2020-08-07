import React from "react";
import img from "./loginpage.png";
import { Typography, Input, Button } from "antd";
import Clock from "react-live-clock";

const { Title } = Typography;

const AttendanceMarker = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url(" + img + ")",
          backgroundSize: "contain",
          backgroundBlendMode: "lighten",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Title level={1}>
            <Clock format="HH:mm" interval={60000} ticking={true} />
          </Title>
          <Title level={3} style={{ color: "#878787", margin: 0 }}>
            Mark your attendance
          </Title>
          <div
            style={{
              width: 400,
              height: 150,
              padding: "20px 60px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: 20,
              textAlign: "center",
              background: "white",
            }}
          >
            <label style={{ float: "left" }}>Employee Code</label>
            <Input className="form-items" style={{ marginBottom: 10 }} />
            <Button
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                color: "white",
                float: "left",
                width: 130,
              }}
              shape="round"
              size="large"
              onClick={() => AttendanceMark()}
            >
              Mark
            </Button>
            <Button
              style={{ float: "right", width: 130 }}
              danger
              type="primary"
              shape="round"
              size="large"
              onClick={() => Exit()}
            >
              Exit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceMarker;

function AttendanceMark() {}

function Exit() {}
