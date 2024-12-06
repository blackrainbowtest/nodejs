import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import ProductImages from "./ProductImages";
import ProductTags from "./ProductTags";
import ProductArticle from "./ProductArticle";

function ProductDetails() {
  return (
    <MainContainer>
      <ProductImages />
      <ProductTags />
      <ProductArticle />
    </MainContainer>
  );
}

export default memo(ProductDetails);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  background: `${theme.palette.background.main}!important`,
  display: "flex",
  gap: "30px",
}));
