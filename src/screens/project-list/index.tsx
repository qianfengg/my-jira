import React, { useState } from "react";
import List, { Project } from "./list";
import SearchPanel from "./search-panel";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useDebounce } from "utils";
import { useUsers } from "utils/user";

export default function ProjectListScreen() {
  const [param, setParam] = useState<Partial<Project>>({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const { error, data: projectList, isLoading } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : (
        ""
      )}
      <List
        dataSource={projectList || []}
        users={users || []}
        loading={isLoading}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 3.2rem;
`;
