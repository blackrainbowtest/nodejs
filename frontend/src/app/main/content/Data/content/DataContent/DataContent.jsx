import { Box, Grid } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import DataImage from "./DataImage";
import DataAction from "./DataAction";
import { useSelector } from "react-redux";

function DataContent({ data }) {
  const category = useSelector((state) => state?.category);
  const subCategory = useSelector((state) => state?.subCategory);
  const filterData = useSelector((state) => state?.filter);

  const currentData = filterData.isFilter
    ? filterData.data.filter((elm) => {
        return (
          elm.gender === category.gender &&
          elm.category ===
            (category.gender
              ? category.category.female
              : category.category.male) &&
          elm.subcategory === subCategory.currentSubcategory
        );
      })
    : data.filter((elm) => {
        return (
          elm.gender === category.gender &&
          elm.category ===
            (category.gender
              ? category.category.female
              : category.category.male) &&
          elm.subcategory === subCategory.currentSubcategory
        );
      });
  return (
    <MainContainer container spacing={2}>
      {currentData.map((elm) => (
        <Grid key={elm.id} item xs={12} sm={6} md={4} lg={2}>
          <DataContainer p={2}>
            <DataImage images={elm.images} />
            <DataAction elm={elm} />
          </DataContainer>
        </Grid>
      ))}
    </MainContainer>
  );
}

export default memo(DataContent);

const MainContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
}));

const DataContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "150px",
  borderRadius: "5px",
}));
