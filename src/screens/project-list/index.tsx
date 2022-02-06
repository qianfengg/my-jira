import React from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useDebounce, useDocumentTitle } from "utils";
import { useUsers } from "utils/user";
import { useProjectSearchParam } from "./util";
// import { Helmet } from "react-helmet";

export default function ProjectListScreen() {
  useDocumentTitle("项目列表", false);

  const [param, setParam] = useProjectSearchParam();
  const {
    error,
    data: projectList,
    isLoading,
  } = useProjects(useDebounce(param, 200));
  const { data: users } = useUsers();
  // const value: any = undefined
  return (
    <Container>
      {/* {value.notExist} */}
      {/* <Helmet>
        <title>项目列表</title>
      </Helmet> */}
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

ProjectListScreen.whyDidYouRender = false;
