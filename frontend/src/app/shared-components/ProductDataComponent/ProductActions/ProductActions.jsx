import styled, { css } from "styled-components";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { memo, useState } from "react";
import { Box } from "@mui/system";
import ModalComponent from "app/shared-components/ModalComponent";
import ProductDataWatchComponent from "app/shared-components/ProductDataWatchComponent";
import { useFormContext } from "react-hook-form";

function ProductActions({ props }) {
  const { gender, selectedCategory, selectedSubCategory } = props;
  const { getValues } = useFormContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  let currentFormData = getValues();

  currentFormData = {
    ...currentFormData,
    gender: currentFormData.gender ?? gender,
    category: currentFormData.selectedCategory ?? selectedCategory,
    subcategory: currentFormData.selectedSubCategory ?? selectedSubCategory,
  };

  return (
    <MainContainer>
      <ActionButtonComponent
        label='Watch'
        customStyles={WatchButtonStyle}
        callback={handleOpen}
      />
      <ActionButtonComponent
        label={"Add"}
        customStyles={ActionButtonStyle}
        type={"submit"}
      />
      <ModalComponent open={open} handleClose={handleClose}>
        <ProductDataWatchComponent
          handleClose={handleClose}
          currentFormData={currentFormData}
        />
      </ModalComponent>
    </MainContainer>
  );
}

export default memo(ProductActions);

const ActionButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
`;

const WatchButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
  background-color: transparent !important;
  color: ${theme.palette.text.grey}!important;
  border: 1px solid ${theme.palette.text.grey}!important;
`;

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
}));
