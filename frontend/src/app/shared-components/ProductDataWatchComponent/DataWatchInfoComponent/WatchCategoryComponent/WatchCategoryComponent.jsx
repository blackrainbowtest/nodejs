import { Box } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import noImage from "images/noImage.jpg";
import { decodeBase64ToImage } from "utils/image";

function WatchCategoryComponent({ categoryID, subCateogryID }) {
  const category = useSelector((state) => state?.category?.data).filter(
    (elm) => elm.id === categoryID
  )[0];
  const subCateogry = useSelector((state) => state?.subCategory?.data).filter(
    (elm) => elm.id === subCateogryID
  )[0];

  const imageUrl = category?.image
    ? decodeBase64ToImage(category?.image)
    : null;

  return (
    <MainContainer>
      <ImageContainer>
        <img src={imageUrl ? imageUrl : noImage} alt='' />
      </ImageContainer>
      <CategoryDataContainer>
        <span>{category.name}</span>
        <span>{subCateogry.name}</span>
      </CategoryDataContainer>
    </MainContainer>
  );
}

export default memo(WatchCategoryComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  gap: "10px",
}));

const CategoryDataContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "& span:first-of-type": {
    fontWeight: "bold",
  },
}));

const ImageContainer = styled(Box)(() => ({
  "& img": {
    maxWidth: "50px",
  },
}));
