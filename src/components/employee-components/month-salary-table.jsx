import React from "react";
import { Table } from "react-bootstrap";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./salary-attendance-css.css";

const MonthSalaryTable = () => {
  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 20))
    .fill("")
    .map((v, idx) => now - idx);

  const menu = (
    <Menu>
      {years.map((year) => (
        <Menu.Item key={year}>{year}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          {years[0]} <DownOutlined />
        </a>
      </Dropdown>

      <Table className="month-table" borderless hover size="sm" responsive>
        <tbody>
          <tr>
            <td>January</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>February</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>March</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>April</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>May</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>June</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>July</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>August</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>September</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>October</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>November</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>December</td>
            <td>0000</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default MonthSalaryTable;
