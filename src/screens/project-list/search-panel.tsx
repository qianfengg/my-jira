import React, { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject } from "utils";

const domain = process.env.REACT_APP_API_URL;

export interface SearchPanelParam {
  name: string;
  personId: string;
}

export interface User {
  id: number;
  name: string;
}

export default function SearchPanel() {
  const [param, setParam] = useState<SearchPanelParam>({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch(`${domain}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  useEffect(() => {
    const url = `${domain}/projects?${qs.stringify(cleanObject(param))}`;
    fetch(url).then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    });
  }, [param]);
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
