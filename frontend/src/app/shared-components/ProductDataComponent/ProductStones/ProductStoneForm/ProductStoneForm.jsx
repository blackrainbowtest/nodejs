import { Box } from "@mui/material";
import { memo } from "react";
import styled, { css } from "styled-components";
import ProductStonesType from "./ProductStonesType";
import ProductStonesCount from "./ProductStonesCount";
import ProductStonesDiametr from "./ProductStonesDiametr";
import ProductStonesWeight from "./ProductStonesWeight/ProductStonesWeight";
import ProductStonesQuality from "./ProductStonesQuality";
import ProductStonesPrice from "./ProductStonesPrice";
import ProductStonesNumber from "./ProductStonesNumber";
import ProductStonesGIA from "./ProductStonesGIA";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";

function ProductStoneForm({ stone, index, canDelete, addNew, onRemove, onAdd }) {

  return (
    <ContentContainer>
      <ProductStonesType stone={stone} index={index} />
      <ProductStonesCount stone={stone} index={index} />
      <ProductStonesDiametr stone={stone} index={index} />
      <ProductStonesWeight stone={stone} index={index} />
      <ProductStonesQuality stone={stone} index={index} />
      <ProductStonesPrice stone={stone} index={index} />
      <ProductStonesGIA stone={stone} index={index} />
      <ProductStonesNumber stone={stone} index={index} />
      <AddNewContainer>
        {canDelete ? (
          <Empty />
        ) : (
          <ButtonRemoveComponent index={index} callback={onRemove} />
        )}
        {addNew ? <ButtonAddComponent callback={onAdd} /> : <Empty />}
      </AddNewContainer>
    </ContentContainer>
  );
}

export default memo(ProductStoneForm);

const ContentContainer = styled(Box)(() =>
  css({
    width: "100%",
    display: "flex",
    gap: "10px",
  })
);

const AddNewContainer = styled(Box)(() => ({
  minWidth: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Empty = styled(Box)(() => ({
  minWidth: "24px",
}));
