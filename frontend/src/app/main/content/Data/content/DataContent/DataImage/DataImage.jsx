import { memo } from "react";
import styled from "styled-components";
import { decodeBase64ToImage } from "utils/image";
import noImage from "images/noImage.jpg";

function DataImage({ images }) {
  return images.length ? (
    <ImageItem src={decodeBase64ToImage(images[0])} alt={images[0].alt} />
  ) : (
    <ImageItem src={noImage} alt={"No image"} />
  );
}

export default memo(DataImage);

const ImageItem = styled("img")(() => ({
  maxWidth: "100%",
  maxHeight: "110px",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "5px",
}));
