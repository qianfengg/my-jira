import React from "react";
import { User } from "./search-panel";
import { Table } from "antd";
import dayjs from "dayjs";

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

export interface ListProps {
  projectList: Project[];
  users: User[];
}

export default function List({ projectList, users }: ListProps) {
  return (
    <Table
      rowKey={'id'}
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
        {
          title: "创建时间",
          render: (value, project) => (
            <span>
              {project.created
                ? dayjs(project.created).format("YYYY-MM-DD")
                : "无"}
            </span>
          ),
        },
      ]}
    ></Table>
  );
}
