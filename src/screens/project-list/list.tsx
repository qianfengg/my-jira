import React from "react";
import { User } from "./search-panel";
import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Pin from "components/pin";
import { useEditProjects } from "utils/project";

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
  pin: boolean;
}

export interface ListProps extends TableProps<Project> {
  users: User[];
  refresh?: () => void;
}

export default function List({ users, refresh, ...props }: ListProps) {
  const { mutate } = useEditProjects();
  const pinProject = (id: number) => (pin: boolean) =>
    mutate({ id, pin }).then(refresh);
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={[
        {
          title: <Pin checked={true} disabled />,
          render(value, project) {
            return (
              <Pin
                checked={project.pin}
                onCheckedChange={pinProject(project.id)}
              />
            );
          },
        },
        {
          title: "工程名",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (value, project) => (
            <Link to={String(project.id)}>{project.name}</Link>
          ),
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
      {...props}
    ></Table>
  );
}
