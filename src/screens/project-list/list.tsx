import React from "react";
import { User } from "./search-panel";

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
    <table>
      <thead>
        <tr>
          <th>工程名</th>
          <th>负责人</th>
          <th>组织</th>
        </tr>
      </thead>
      <tbody>
        {projectList.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find((user) => user.id === project.personId)?.name}</td>
            <td>{project.organization}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
