import React, { useEffect, useState } from "react";
import List, { Project } from "./list";
import SearchPanel, { SearchPanelParam, User } from "./search-panel";
import { cleanObject, useDebounce, useMount } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";

export default function ProjectListScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | Error>(null)
  const [param, setParam] = useState<SearchPanelParam>({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState<User[]>([]);
  const client = useHttp();
  useMount(() => {
    client("users").then(setUsers);
  })
  const [projectList, setProjectList] = useState<Project[]>([]);
  const debouncedParam = useDebounce(param, 200);
  useEffect(() => {
    setIsLoading(true)
    client("projects", { data: cleanObject(debouncedParam) })
    .then(list => {
      setProjectList(list)
      setError(null)
    })
    .catch(err => {
      setError(err)
      setProjectList([])
    })
    .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam]);
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      {error ? (<Typography.Text type={'danger'}>{error.message}</Typography.Text>) : ""}
      <List dataSource={projectList} users={users} loading={isLoading}/>
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;
