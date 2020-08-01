import React from "react";
import { Table } from "react-bootstrap";
import "./salary-attendance-css.css";

const AttendanceTable = () => {
  return (
    <div className="tableFixHead scrollbar scrollbar-info">
      <Table style={{ width: "100%" }} borderless hover responsive>
        <thead>
          <tr>
            <th>Day</th>
            <th>Attendance Status</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Penalty Amount</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#FFFFFF" }}>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AttendanceTable;
