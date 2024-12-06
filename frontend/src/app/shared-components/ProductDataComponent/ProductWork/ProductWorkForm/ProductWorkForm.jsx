import { Box } from "@mui/material";
import ButtonAddComponent from "app/shared-components/ButtonAddComponent";
import ButtonRemoveComponent from "app/shared-components/ButtonRemoveComponent";
import { memo } from "react";
import styled, { css } from "styled-components";
import ProductWorkName from "./ProductWorkName";
import ProductWorkCount from "./ProductWorkCount";
import ProductWorkPrice from "./ProductWorkPrice";
import ProductWorkAmount from "./ProductWorkAmount";
import ProductWorkComment from "./ProductWorkComment";

function ProductWorkForm({ work, index, canDelete, addNew, onRemove, onAdd }) {

  return (
    <ContentContainer>
      <ProductWorkName work={work} index={index} />
      <ProductWorkCount work={work} index={index} />
      <ProductWorkPrice work={work} index={index} />
      <ProductWorkAmount work={work} index={index} />
      <ProductWorkComment work={work} index={index} />
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

export default memo(ProductWorkForm);

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
