import { Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { memo } from "react";
import styled from "styled-components";
import { resizeImage } from "utils/image";

function ImageUploadComponent({ callback, label = "Upload image", disabled }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      resizeImage(file, 500, 500, (resizedImage) => {
        callback(resizedImage);
      });
      event.target.value = null;
    }
  };

  return (
    <UploadButtonContainer
      component='label'
      role={undefined}
      variant='contained'
      tabIndex={-1}
      disabled={disabled}
    >
      <UploadButtonContent>
        <AddPhotoAlternateIcon />
        <UploadButtonLabel>{label}</UploadButtonLabel>
      </UploadButtonContent>
      <VisuallyHiddenInput
        type='file'
        accept='image/*'
        onChange={handleImageChange}
      />
    </UploadButtonContainer>
  );
}

export default memo(ImageUploadComponent);

const UploadButtonContainer = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: `${theme.palette.background.upload}!important`,
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.3rem",
}));

const UploadButtonContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  "& svg": {
    width: "22px",
    height: "22px",
  },
}));

const UploadButtonLabel = styled("span")(() => ({
  maxWidth: "60%",
  textAlign: "center",
  marginTop: "10px",
}));

const VisuallyHiddenInput = styled("input")(() => ({
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: "0",
}));
