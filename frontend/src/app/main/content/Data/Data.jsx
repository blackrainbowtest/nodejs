import { Box } from "@mui/material";
import { getProducts } from "features/Product/ProductAPI";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import EmptyData from "./content/EmptyData";
import DataContent from "./content/DataContent";

function Data() {
  const product = useSelector((state) => state?.product.data);
  const filter = useSelector((state) => state?.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      {filter.data.length || product.length ? (
        <DataContent data={filter.data.length > 0 ? filter.data : product} />
      ) : (
        <EmptyData></EmptyData>
      )}
    </MainContainer>
  );
}

export default memo(Data);

const MainContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;
