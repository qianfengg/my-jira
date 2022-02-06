import { Input, Form } from "antd";
import UserSelect from "components/user-select";
import React from "react";
import { Project } from "./list";
export interface User {
  id: number;
  name: string;
  token: string;
}

export interface SearchPanelProps {
  param: Pick<Project, "name" | "personId">;
  setParam: (param: SearchPanelProps["param"]) => void;
  users: User[];
}

export default function SearchPanel({
  param,
  setParam,
  users,
}: SearchPanelProps) {
  return (
    <Form layout={"inline"} style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"负责人"}
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
}
