import React from "react";
import "antd/dist/antd.css";
import { Tree } from "antd";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    icon: <CarryOutOutlined />,
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-0-0-2",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        icon: <CarryOutOutlined />,
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
            icon: <CarryOutOutlined />,
          },
          {
            title: "leaf",
            key: "0-0-2-1",
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
];

const MiniProjectDetails = () => {
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Tree
        showLine={true}
        showIcon={true}
        defaultExpandedKeys={["0-0-0"]}
        treeData={treeData}
      />
    </>
  );
};

export default MiniProjectDetails;
