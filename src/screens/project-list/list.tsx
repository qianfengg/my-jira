import React from "react";
import { User } from "./search-panel";
import { Table } from "antd";

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
}

export interface ListProps {
  projectList: Project[];
  users: User[];
}

export default function List({ projectList, users }: ListProps) {
  return (
    <Table
      pagination={false}
      dataSource={projectList}
      columns={[
        {
          title: "工程名",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render: (value, project) => (
            <span>
              {users.find((user) => user.id === project.personId)?.name}
            </span>
          ),
        },
        { title: "组织", dataIndex: "organization" },
      ]}
    ></Table>
  );
}
