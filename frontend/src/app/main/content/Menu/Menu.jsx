import { memo, useEffect } from "react";
import Categorys from "./content/Categorys";
import SubCategorys from "./content/SubCategorys";
import styled from "styled-components";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { getCategorys } from "features/Category/CategoryAPI";
import { getSubCategorys } from "features/SubCategory/SubCategoryAPI";

const MainContainer = styled(Box)`
  width: 100%;
  min-height: 185px;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Menu() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorys());
    dispatch(getSubCategorys())
  }, [dispatch]);

  return (
    <MainContainer>
      <Categorys />
      <SubCategorys />
    </MainContainer>
  );
}

export default memo(Menu);
