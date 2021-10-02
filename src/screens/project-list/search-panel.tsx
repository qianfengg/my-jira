import React, { useEffect, useState } from "react";

const domain = process.env.REACT_APP_API_URL;

export interface SearchPanelParam {
  name: string;
  personId: string;
}
export interface User {
  id: number;
  name: string;
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
      <input
        type="text"
        value={param.name}
        onChange={(evt) => {
          setParam({
            ...param,
            name: evt.target.value,
          });
        }}
      />
      <select
        value={param.personId}
        onChange={(evt) => {
          setParam({
            ...param,
            personId: evt.target.value,
          });
        }}
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
