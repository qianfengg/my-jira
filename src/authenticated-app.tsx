import React from "react";
import ProjectListScreen from "screens/project-list";
import { Button } from "antd";
import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import { Row } from "components/lib";

export default function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between>
        <HeaderLeft gap>
          <h3>Logo</h3>
          <h3>A</h3>
          <h3>B</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 6rem 1fr 6rem;
`

const Header = styled(Row)``
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main``
const Footer = styled.footer``
