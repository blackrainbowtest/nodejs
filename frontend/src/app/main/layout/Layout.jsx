import { memo } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Action from "./content/Action";
import Logo from "./content/Logo";
import Search from "./content/Search";
import { Outlet } from "react-router-dom";
import NotificationManager from "./content/NotificationManager";

function Layout() {
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <LayoutContainer>
        <Logo />
        {/* <Search /> */}
        <Action />
      </LayoutContainer>
      <Outlet />
      <NotificationManager />
    </MainContainer>
  );
}

export default memo(Layout);

const MainContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  width: 100%;
  min-height: 70px;
  position: sticky;
  top: 0px;
  background: ${(props) => props.theme.palette.background.default}!important;
  z-index: 555;

  @media (max-width: 768px) {
    padding: 0px 10px;
    min-height: 50px;
  }

  @media (max-width: 320px) {
    padding: 0px 5px;
    min-height: 40px;
  }
`;
