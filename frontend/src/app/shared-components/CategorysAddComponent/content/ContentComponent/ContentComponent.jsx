import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import GednerComponent from "./content/GednerComponent/GednerComponent";
import ImageComponent from './content/ImageComponent/ImageComponent';
import TextInputComponent from 'app/shared-components/TextInputComponent';

const MainContainer = styled(Box)(
  ({ theme }) => `
      width: 100%;
      min-height: 100%;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
        gap: 5px;
      z-index: 1;
    `
);

function ContentComponent({ props }) {
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <GednerComponent gender={props.gender} setGender={props.setGender} />
      <TextInputComponent value={props.categoryName} callback={props.setCategoryName} label='Category' />
      <ImageComponent categoryImage={props.categoryImage} setCategoryImage={props.setCategoryImage}/>
    </MainContainer>
  );
}

export default memo(ContentComponent);
