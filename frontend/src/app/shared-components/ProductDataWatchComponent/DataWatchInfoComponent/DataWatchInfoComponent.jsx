import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import WatchCategoryComponent from "./WatchCategoryComponent";
import WatchShortInfoComponent from "./WatchShortInfoComponent";
import WatchTagComponent from "./WatchTagComponent";
import WatchGoldComponent from "./WatchGoldComponent";
import WatchWorkComponent from "./WatchWorkComponent";
import WatchStoneComponent from "./WatchStoneComponent";

function DataWatchInfoComponent({ data }) {

  return (
    <MainContainer>
      <WatchCategoryComponent categoryID={data.category} subCateogryID={data.subcategory} />
      <WatchShortInfoComponent
        article={data.article}
        price={data.price.price}
        prodPrice={data.price.productionPrice}
      />
      <WatchTagComponent tags={data.tags ?? []} />
      <WatchGoldComponent golds={data.golds ?? []} />
      <WatchWorkComponent works={data.works ?? []} />
      <WatchStoneComponent stones={data.stones ?? []} />
    </MainContainer>
  );
}

export default memo(DataWatchInfoComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  maxHeight: "580px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));
