import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import TitleActionComponent from "../TitleActionComponent";
import { useSelector } from "react-redux";
import GenderIconComponent from "../GenderIconComponent";
import { unixTimeToDate } from 'utils/validation';
import DataWatchInfoComponent from './DataWatchInfoComponent';
import DataWatchImageComponent from './DataWatchImageComponent';

function ProductDataWatchComponent({ handleClose, currentFormData }) {
  const gender = useSelector((state) => state?.category?.gender);

  return (
    <MainContainer>
      <TitleActionComponent
        close={handleClose}
        title={
          <ActionTitle gender={gender} date={currentFormData.currentTime} />
        }
      />
      <ContentContainer sx={{ flexGrow: 1 }}>
        <DataWatchImageComponent data={currentFormData}/>
        <DataWatchInfoComponent data={currentFormData} />
      </ContentContainer>
    </MainContainer>
  );
}

export default memo(ProductDataWatchComponent);

const MainContainer = styled(Box)(({theme}) => ({
  width: "860px",
  minHeight: "680px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "30px",
  borderRadius: "5px",
  backgroundColor: theme.palette.background.main
}));

const ContentContainer = styled(Box)(() => ({
  width: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "10px",
  
}));

function ActionTitle({ gender, date }) {
  return (
    <MainTitleContainer>
      <GenderIconComponent gender={gender} />
      <span>{gender ? "female" : "male"}</span>
      <span>|</span>
      {date ? unixTimeToDate(date) : "The product is not published yet."}
    </MainTitleContainer>
  );
}

const MainTitleContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
