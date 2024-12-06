import { Box } from "@mui/material";
import ImageCollectionComponent from "app/shared-components/ImageCollectionComponent";
import ImageUploadComponent from "app/shared-components/ImageUploadComponent";
import { memo } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import styled from "styled-components";

const MAX_IMAGES = 4;

function ProductImages() {
  const { control, setValue, clearErrors } = useFormContext();

  const images = useWatch({ control, name: "images" }) || [];

  const handleAddNewImage = (newImage) => {
    if (images.length < MAX_IMAGES) {
      setValue("images", [...images, newImage]);

      clearErrors("images");
    }
  };

  const handleRemoveImage = (removedImageIndex) => {
    const updatedImages = images.filter(
      (_, index) => index !== removedImageIndex
    );
    setValue("images", updatedImages);

    if (updatedImages.length === 0) {
      clearErrors("images");
    }
  };

  return (
    <ImageContainer>
      <UploadContainer>
        <Controller
          name='images'
          control={control}
          defaultValue={[]}
          rules={{
            validate: (value) => value.length > 0 || "Image is required",
          }}
          render={({ field, fieldState }) => (
            <>
              <ImageUploadComponent
                callback={handleAddNewImage}
                disabled={field.value.length >= MAX_IMAGES}
                label={
                  fieldState.error && (
                    <ErrorText>{fieldState.error.message}</ErrorText>
                  )
                }
              />
            </>
          )}
        />
      </UploadContainer>
      <CollectionContainer>
        <ImageCollectionComponent
          images={images}
          callback={handleRemoveImage}
          count={MAX_IMAGES}
        />
      </CollectionContainer>
    </ImageContainer>
  );
}

export default memo(ProductImages);

const ImageContainer = styled(Box)(({ theme }) => ({
  minWidth: "200px",
  minHeight: "180px",
  boxShadow: `${theme.palette.shadow.default}`,
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  overflow: "hidden",
}));

const UploadContainer = styled("div")(() => ({
  minHeight: "120px",
}));

const CollectionContainer = styled("div")(() => ({
  minHeight: "34px",
}));

const ErrorText = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "0.875rem",
}));
