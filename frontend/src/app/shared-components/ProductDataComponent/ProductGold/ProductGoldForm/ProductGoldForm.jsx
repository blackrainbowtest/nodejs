import { Box } from "@mui/material";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import styled, { css } from "styled-components";
import ProductGoldProb from "./ProductGoldProb";
import ProductGoldStartWeight from "./ProductGoldStartWeight";
import ProductGoldWeight from "./ProductGoldWeight";
import ProductGoldPrice from "./ProductGoldPrice";

function ProductGoldForm({ gold, index, canDelete, addNew, onRemove, onAdd }) {

  return (
    <ContentContainer>
      <ProductGoldProb gold={gold} index={index} />
      <ProductGoldStartWeight gold={gold} index={index} />
      <ProductGoldWeight gold={gold} index={index} />
      <ProductGoldPrice gold={gold} index={index} />
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

export default ProductGoldForm;

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
