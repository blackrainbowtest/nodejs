import { Box } from "@mui/material";
import { memo, useState } from "react";
import styled from "styled-components";
import WatchActionComponent from "./WatchActionComponent";
import WatchImageSliderComponent from "./WatchImageSliderComponent";
import WatchSmallImagesComponent from "./WatchSmallImagesComponent";

function DataWatchImageComponent({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <MainContainer>
      <WatchImageSliderComponent images={data.images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <WatchSmallImagesComponent sx={{ flexGrow: 1 }} images={data.images} currentIndex={currentIndex} />
      <WatchActionComponent canSell={!!data.id} />
    </MainContainer>
  );
}

export default memo(DataWatchImageComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
