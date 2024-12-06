import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import { decodeBase64ToImage } from "utils/image";

function WatchSmallImagesComponent({ images, currentIndex }) {
  
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      {images.map((image, index) => {
        return typeof image === "string" ? (
          <ImageItem
            src={decodeBase64ToImage(image)}
            alt={image?.alt}
            key={index}
            select={(index === currentIndex).toString()}
          />
        ) : (
          <ImageItem
            src={URL.createObjectURL(image)}
            alt={image?.alt}
            key={index}
            select={(index === currentIndex).toString()}
          />
        );
      })}
    </MainContainer>
  );
}

export default memo(WatchSmallImagesComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  gap: "10px",
}));

const ImageItem = styled("img")(({ theme, select }) => ({
  maxWidth: "90px",
  maxHeight: "90px",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "5px",
  border: select === "true" ? `2px solid ${theme.palette.border.gray}` : "none",
}));
