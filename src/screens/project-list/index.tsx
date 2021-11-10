import React, { useEffect, useState } from "react";
import List, { Project } from "./list";
import SearchPanel, { SearchPanelParam, User } from "./search-panel";
import { cleanObject, useDebounce } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

export default function ProjectListScreen() {
  const [param, setParam] = useState<SearchPanelParam>({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState<User[]>([]);
  const client = useHttp();
  useEffect(() => {
    client("users").then(setUsers);
  }, []);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const debouncedParam = useDebounce(param, 200);
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(
      setProjectList
    );
  }, [debouncedParam]);
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List projectList={projectList} users={users} />
    </Container>
  );
}

const Container = styled.div`
padding: 3.2rem;
`
