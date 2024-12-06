import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function EmptyData() {
  return <MainContainer>No Data</MainContainer>;
}

export default memo(EmptyData);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px"
}));
