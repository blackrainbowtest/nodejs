import { memo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent/ActionButtonComponent";
import ModalComponent from "app/shared-components/ModalComponent/ModalComponent";

import { css } from "styled-components";
import { resetCurrentData } from 'features/Product/ProductSlice';
import { useDispatch } from 'react-redux';
import ProductDataComponent from 'app/shared-components/ProductDataComponent';

function AddNewProduct() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    dispatch(resetCurrentData());
  };
  return (
    <>
      <ActionButtonComponent
        callback={handleOpen}
        label={<AddIcon />}
        customStyles={ActionButtonStyle}
      />
      <ModalComponent open={open} handleClose={handleClose}>
        <ProductDataComponent handleClose={handleClose} />
      </ModalComponent>
    </>
  );
}

export default memo(AddNewProduct);

const ActionButtonStyle = ({ theme }) => css`
  min-height: 60px!important;
  min-width: 50px!important;
  border-radius: 10px 0px 0px 10px!important;
`;
