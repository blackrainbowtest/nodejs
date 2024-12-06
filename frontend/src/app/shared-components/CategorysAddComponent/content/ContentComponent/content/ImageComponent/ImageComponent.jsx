import { Box } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { memo } from "react";
import styled from "styled-components";
import { resizeImage } from 'utils/image';

const MainContainer = styled(Box)`
  flex-grow: 1;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const UploadButtonContainer = styled(Button)(
  ({ theme }) => `
    width: 100%;
    min-height: 145px;
    display: flex;
    flex-direction: column;
    background: ${theme.palette.background.upload}!important;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  `
);

const UploadButtonContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    width: 50px;
    height: 50px;
  }
`;

const VisuallyHiddenInput = styled("input")`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const StyledImage = styled.img`
  max-width: 260px;
  max-height: 145px;
`;

const StyledDeleteButton = styled(Button)(
  ({ theme }) => `
      min-width: 40px!important;
      min-height: 40px;
      position: absolute!important;
      top: 0;
      right: 0;
      border-radius: 50%!important;
      display: flex;
      flex-direction: column;
      background: ${theme.palette.background.buttonTransparent}!important;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      color: ${theme.palette.common.white}!important;
      &:hover {
        background: ${theme.palette.background.button}!important;
      }
    `
);

function ImageComponent({ categoryImage, setCategoryImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      resizeImage(file, 50, 50, (resizedImage) => {
        setCategoryImage(resizedImage);
      });
    }
  };

  const handleImageDelete = (event) => {
    event.stopPropagation();
    setCategoryImage(null);
  };
  
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      {categoryImage ? (
        <>
          <StyledImage
            src={`${URL.createObjectURL(categoryImage)}`}
            alt={categoryImage.name}
            loading='lazy'
          />
          <StyledDeleteButton onClick={handleImageDelete}><CloseIcon /></StyledDeleteButton>
        </>
      ) : (
        <UploadButtonContainer
          component='label'
          role={undefined}
          variant='contained'
          tabIndex={-1}
        >
          <UploadButtonContent>
            <AddPhotoAlternateIcon />
            Download image
          </UploadButtonContent>
          <VisuallyHiddenInput
            type='file'
            accept='image/*'
            onChange={handleImageChange}
          />
        </UploadButtonContainer>
      )}
    </MainContainer>
  );
}

export default memo(ImageComponent);
