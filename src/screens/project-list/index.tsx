import React, { useEffect, useState } from "react";
import List, { Project } from "./list";
import SearchPanel, { SearchPanelParam, User } from "./search-panel";
import qs from "qs";
import { cleanObject, useDebounce } from "utils";

const domain = process.env.REACT_APP_API_URL;

export default function ProjectListScreen() {
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
  const [projectList, setProjectList] = useState<Project[]>([]);
  const debouncedParam = useDebounce(param, 200);
  useEffect(() => {
    const url = `${domain}/projects?${qs.stringify(
      cleanObject(debouncedParam)
    )}`;
    fetch(url).then(async (response) => {
      if (response.ok) {
        setProjectList(await response.json());
      }
    });
  }, [debouncedParam]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List projectList={projectList} users={users} />
    </div>
  );
}
