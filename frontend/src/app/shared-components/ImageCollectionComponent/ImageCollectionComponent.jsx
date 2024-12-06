import { Box, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { memo } from "react";
import styled from "styled-components";
import { decodeBase64ToImage } from "utils/image";

/**
 * Component for displaying a collection of images.
 *
 * @param {Object} param0 - Component parameters.
 * @param {Array<Object>} param0.images - Array of image objects.
 * @param {function} param0.callback - Event callback function.
 * @param {number} param0.count - Number of images to display.
 * @returns {JSX.Element} - A JSX element representing a component.
 */
function ImageCollectionComponent({ images, callback, count }) {
  const handleDeleteImage = (event, imageIndex) => {
    event.stopPropagation();
    callback(imageIndex);
  };

  const itemsToRender = Array.from({ length: count }, (_, index) => {
    if (index < images.length) {
      return (
        <CollectionItemContainer key={index}>
          {typeof images[index] === "string" ? (
            <ImageItem
              src={decodeBase64ToImage(images[index])}
              alt={images[0].alt}
            />
          ) : (
            <ImageItem
              src={URL.createObjectURL(images[index])}
              alt={images[index]?.alt}
            />
          )}
          <DeleteButton onClick={(e) => handleDeleteImage(e, index)}>
            <CloseIcon />
          </DeleteButton>
        </CollectionItemContainer>
      );
    } else {
      return (
        <CollectionItemContainer key={index}>
          <AddPhotoAlternateIcon />
        </CollectionItemContainer>
      );
    }
  });

  return <ImageCollectionContainer>{itemsToRender}</ImageCollectionContainer>;
}

export default memo(ImageCollectionComponent);

const ImageCollectionContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
}));

const CollectionItemContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "35px",
  aspectRatio: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `${theme.palette.background.upload}!important`,
  color: theme.palette.common.white,
  gap: "10px",
  borderRadius: "5px",
  position: "relative",
}));

const ImageItem = styled("img")(() => ({
  maxWidth: "100%",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "5px",
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  minWidth: "12px!important",
  fontSize: "0.3rem!important",
  padding: "0px!important",
  aspectRatio: "1",
  position: "absolute!important",
  top: "-10px",
  right: "0px",
  borderRadius: "50%!important",
  background: `${theme.palette.background.default}!important`,
  color: `${theme.palette.background.upload}!important`,
  transform: "translate(50%, 50%)",
  boxShadow: `${theme.palette.shadow.default}`,
  "&:hover": {
    background: `${theme.palette.background.upload}!important`,
    color: `${theme.palette.common.white}!important`,
  },
  "&& svg": {
    width: "0.6rem",
    height: "0.6rem",
  },
}));
