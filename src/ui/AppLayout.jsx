import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MainNav from "./MainNav";
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100dvh;
`;
const Main = styled.main`
  background-color: var(--color-grey-150);
  padding: 2.4rem 3.2rem;
  grid-row: 1 / 2;
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Outlet />
      </Main>
      <MainNav />
    </StyledAppLayout>
  );
}
