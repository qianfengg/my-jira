import { Input, Select } from "antd";
import React from "react";

export interface SearchPanelParam {
  name: string;
  personId: string;
}
export interface User {
  id: number;
  name: string;
  token: string;
}

export interface SearchPanelProps {
  param: SearchPanelParam;
  setParam: (param: SearchPanelProps["param"]) => void;
  users: User[];
}

export default function SearchPanel({
  param,
  setParam,
  users,
}: SearchPanelProps) {
  return (
    <div>
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
      <Select
        value={param.personId}
        onChange={(value) => {
          setParam({
            ...param,
            personId: value,
          });
        }}
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}
