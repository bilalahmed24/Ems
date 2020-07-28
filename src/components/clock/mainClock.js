import React from "react";
import B from "./Clock";

export default function Clock() {
  const style = {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
  };

  return (
    <div style={style}>
      <div style={{ paddingTop: 10, textAlign: "-webkit-center" }}>
        <B size={195} />
      </div>
    </div>
  );
}
