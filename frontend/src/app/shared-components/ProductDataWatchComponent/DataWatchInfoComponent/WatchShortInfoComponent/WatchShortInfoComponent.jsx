import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function WatchShortInfoComponent({ article, price, prodPrice }) {
  return <MainContainer>
    <ItemContainer><span>Article</span> <span>{article ?? "not set"}</span></ItemContainer>
    <ItemContainer><span>Price</span> <span>{price ?? "not set"}{price ? '$' : null}</span></ItemContainer>
    <ItemContainer><span>Production price</span> <span>{prodPrice ?? "not set"}{prodPrice ? '$' : null}</span></ItemContainer>
  </MainContainer>;
}

export default memo(WatchShortInfoComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: theme.palette.background.secondary,
}));

const ItemContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "25px",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.dark,
    borderBottom: `1px solid ${theme.palette.background.gray}`,
  }));
