import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import ProductSubCategory from "./ProductSubCategory/ProductSubCategory";
import ProductGender from "./ProductGender";
import ProductCategory from "./ProductCategory/ProductCategory";

const MainContainer = styled(Box)(
  ({ theme }) => `
  width: 100%;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
);

const ProductCategoryContainer = styled(Box)(
  ({ theme }) => `
  width: 100%;
  min-height: 80px;
  background: ${theme.palette.background.main}!important;
  display: flex;
  align-items: center;
  gap: 20px;
`
);

function ProductClassification({ props }) {
  const {
    gender,
    setGender,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  } = props;

  return (
    <MainContainer>
      <ProductCategoryContainer>
        <ProductGender props={{ gender, setGender }} />
        <ProductCategory
          props={{ gender, selectedCategory, setSelectedCategory }}
        />
      </ProductCategoryContainer>
      <ProductSubCategory
        props={{
          selectedSubCategory,
          setSelectedSubCategory,
          selectedCategory,
        }}
      />
    </MainContainer>
  );
}

export default memo(ProductClassification);
