import { Box, Button } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import { decodeBase64ToImage } from "utils/image";

function WatchImageSliderComponent({ images, currentIndex, setCurrentIndex }) {
  const prevImg = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImg = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <MainContainer>
      <ButtonContainer onClick={prevImg}>{"<"}</ButtonContainer>
      {typeof images[currentIndex] === "string" ? (
        <ImageItem
          src={decodeBase64ToImage(images[currentIndex])}
          alt={images[0].alt}
        />
      ) : (
        <ImageItem
          src={URL.createObjectURL(images[currentIndex])}
          alt={images[currentIndex]?.alt}
        />
      )}
      <ButtonContainer content='>' onClick={nextImg}>
        {">"}
      </ButtonContainer>
    </MainContainer>
  );
}

export default memo(WatchImageSliderComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  // minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "10px",
}));

const ButtonContainer = styled(Button)(({ theme, content }) => ({
  minWidth: "32px!important",
  minHeight: "32px",
  display: "flex",
  top: "50%",
  transform: "translateY(-50%)",
  flexDirection: "column",
  padding: "0px!important",
  position: "absolute!important",
  background: `${theme.palette.background.main}!important`,
  color: `${theme.palette.text.dark}!important`,
  ...(content === ">" && {
    right: "0%",
  }),
}));

const ImageItem = styled("img")(() => ({
  maxWidth: "100%",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "5px",
}));
