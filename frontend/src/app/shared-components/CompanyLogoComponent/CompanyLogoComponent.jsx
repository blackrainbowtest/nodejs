import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import bgImage from "images/companyBG.png";

function CompanyLogoComponent({ children }) {
  return (
    <ChildrenContainer>
      <LogoContainer>{children}</LogoContainer>
    </ChildrenContainer>
  );
}

export default memo(CompanyLogoComponent);

const LogoContainer = styled(Box)(({ theme }) => ({
  minWidth: "inherit",
  minHeight: "inherit",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.common.white,
  fontSize: "30px",
  fontWeight: "700",
  borderRadius: "5px"
}));

const ChildrenContainer = styled(Box)(() => ({
  minWidth: "280px",
  minHeight: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));
