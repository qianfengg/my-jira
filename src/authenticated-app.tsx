import React from "react";
import ProjectListScreen from "screens/project-list";
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProjectScreen from "screens/project";

export default function AuthenticatedApp() {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path={"/projects"} element={<ProjectListScreen />}></Route>
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            ></Route>
          </Routes>
        </Router>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between>
      <HeaderLeft gap>
        <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"layout"}>
                <Button type="link" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 6rem 1fr 6rem;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
const Footer = styled.footer``;
