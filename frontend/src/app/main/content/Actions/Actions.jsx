import { memo } from "react";
import styled from "styled-components";
import AddNewProduct from "./content/AddNewProduct/AddNewProduct";
import FilterProduct from "./content/Filter/Filter";

const AbsolutePositionAddContainer = styled("div")(
  ({ theme }) => `
    position: fixed;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
  `
);
const AbsolutePositionFilterContainer = styled("div")(
  ({ theme }) => `
    position: fixed;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
  `
);

function Actions() {
  return (
    <>
      <AbsolutePositionAddContainer>
        <AddNewProduct />
      </AbsolutePositionAddContainer>
      <AbsolutePositionFilterContainer>
        <FilterProduct />
      </AbsolutePositionFilterContainer>
    </>
  );
}

export default memo(Actions);
