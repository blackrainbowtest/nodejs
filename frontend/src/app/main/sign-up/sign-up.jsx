import { Box } from "@mui/material";
import CompanyLogoComponent from "app/shared-components/CompanyLogoComponent";
import { memo } from "react";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <ContentContainer>
        <CompanyLogoComponent>ParaGold</CompanyLogoComponent>
        <ActionContainer>
          <SignUpForm />
        </ActionContainer>
      </ContentContainer>
    </MainContainer>
  );
}

export default memo(SignUp);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: `${theme.palette.background.main}!important`,
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  boxShadow: `${theme.palette.shadow.default}`,
}));

const ActionContainer = styled(Box)(() => ({
  minWidth: "280px",
  minHeight: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));
